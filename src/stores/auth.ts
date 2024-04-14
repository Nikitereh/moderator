import {defineStore} from "pinia";
import {computed, nextTick, ref} from "vue";
import AuthStorage from "@/services/AuthStorage";
import {testApi} from "@/services/api/auth";
import {ElNotification} from "element-plus";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const isLoggedIn = computed(() =>!!AuthStorage.getToken());
    const isLoading = ref(false);
    const testData = ref({});
    const form = ref({
        login: '',
        password: '',
    });

    const isDisabled = computed(() => {
        return !form.value.login.trim() ||  !form.value.password.trim();
    })

    const testFunction = async () => {
        testData.value = await testApi();
    }

    const resetForm = () => {
        form.value.login = '';
        form.value.password = '';
    }

    const submitForm = async () => {
        try {
            isLoading.value = true;
            AuthStorage.saveToken('test-token', true)
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(form);
                }, 1000)
            })
            isLoading.value = false;
            resetForm();
            await router.push({name: 'table'});
        } catch (err: any) {
            ElNotification({
                type: 'error',
                message: err.message,
            })
            isLoading.value = false;
        }
    }

    return {
        form,
        isLoggedIn,
        isLoading,
        isDisabled,
        testFunction,
        submitForm,
        resetForm,
        testData,
    }
})