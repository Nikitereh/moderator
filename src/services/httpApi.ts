import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from 'axios';
import type { HttpApiHandleError } from '@/services/HttpApiHandleError';

import { useAuthStore } from '@/stores/auth';
import AuthStorage from '@/services/AuthStorage';

const baseConfig: AxiosRequestConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}`,
};

const controller = new AbortController();
export default class HttpApi {
    public axios: AxiosInstance;

    private authStorage: { getToken: () => string | undefined };

    constructor(config: AxiosRequestConfig = {}) {
        this.authStorage = AuthStorage;
        const service = axios.create(config);

        service.interceptors.request.use(
            this.requestHandleSuccess,
            this.requestHandleError,
        );

        service.interceptors.response.use(
            this.responseHandleSuccess,
            this.responseHandleError,
        );

        this.axios = service;
    }

    protected requestHandleSuccess(config: InternalAxiosRequestConfig) {
        return config;
    }

    protected requestHandleError(error: AxiosError) {
        return Promise.reject(error);
    }

    protected responseHandleSuccess(response: AxiosResponse) {
        return response;
    }

    protected getBearer(): string {
        const token = this.authStorage.getToken();
        return `Bearer ${token}`;
    }

    protected async responseHandleError(error: AxiosError) {
        let errorInstance: HttpApiHandleError = {};
        errorInstance = error.response?.data as HttpApiHandleError || errorInstance;
        errorInstance.code = error.response?.status;

        if ([401].includes(errorInstance.code!)) {
            controller.abort();
            await useAuthStore().logout();
            return false;
        }

        return Promise.reject(errorInstance);
    }

    public async request<D, R>(url: string, config: AxiosRequestConfig, isAuthRequired: boolean): Promise<AxiosResponse<R>> {
        if (!isAuthRequired) {
            config.baseURL = `${import.meta.env.VITE_AUTH_URL}`;
        }

        const requestConfig: AxiosRequestConfig = {
            ...config,
            url,
        };

        if (isAuthRequired) {
            requestConfig.withCredentials = true;
            requestConfig.headers = {
                Authorization: this.getBearer(),
            };
        }

        return this.axios.request<D, AxiosResponse<R>>(requestConfig);
    }

    public get<D, R>(
        url: string,
        params: Partial<D> | null = null,
        isAuthRequired = false,
        config: AxiosRequestConfig = {},
    ): Promise<AxiosResponse> {
        return this.request<D, R>(url, {
            ...config,
            method: 'GET',
            params,
        }, isAuthRequired);
    }

    public post<D, R>(url: string, data: Partial<D> | null = null, isAuthRequired = false, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.request<D, R>(url, {
            ...config,
            method: 'POST',
            data,
        }, isAuthRequired);
    }

    public delete<D, R>(url: string, data: Partial<D> | null = null, isAuthRequired = false, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.request<D, R>(url, {
            ...config,
            method: 'DELETE',
            data,
        }, isAuthRequired);
    }

    public put<D, R>(url: string, data: Partial<D> | null = null, isAuthRequired = false, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.request<D, R>(url, {
            ...config,
            method: 'PUT',
            data,
        }, isAuthRequired);
    }

    public patch<D, R>(url: string, data: Partial<D> | null = null, isAuthRequired = false, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.request<D, R>(url, {
            ...config,
            method: 'PATCH',
            data,
        }, isAuthRequired);
    }
}

export const httpApi = new HttpApi(baseConfig);
