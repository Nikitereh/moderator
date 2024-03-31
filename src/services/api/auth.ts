import {httpApi} from '@/services/httpApi';

export async function getToken() {
    const response = await httpApi.get('');
    return 'testToken';
}

export async function testApi() {
    const response = await httpApi.get('/todos/1');
    return response.data;
}

