import {defineStore} from "pinia";
import {ref} from "vue";
import type {Form} from "@/models/Form";

export const useFormStore = defineStore('form', () => {
    const form = ref<Form>({
        damagers: [],
        type: 'valakas',
        twins: [],
        count_of_randoms: 0,
        price_of_random: 0,
    } as Form)
    const isDisabled = ref(false);
    const isVisible = ref(false);

    const toggleForm = () => {
        isVisible.value = !isVisible.value;
    }

    return {
        form,
        isDisabled,
        isVisible,
        toggleForm,
    }
})