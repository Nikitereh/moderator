import {defineStore} from "pinia";
import {ref} from "vue";
import AuthStorage from "@/services/AuthStorage";
import {testApi} from "@/services/api/auth";

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(!!AuthStorage.getToken());
    const testData = ref({});

    const testFunction = async () => {
        testData.value = await testApi();
    }

    return {
        testFunction,
        testData,
    }
})