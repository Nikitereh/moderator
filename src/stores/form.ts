import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Form} from "@/models/Form";
import {ElNotification} from "element-plus";

export const useFormStore = defineStore('form', () => {
    const requiredCount = ref(15);
    const form = ref<Form>({
        damagers: [],
        type: 'valakas',
        twins: [],
        count_of_randoms: 0,
        price_of_random: 0,
    } as Form)
    const isDisabled = ref(false);
    const isVisible = ref(false);

    const getTwinsCount = () => {
        let result: number;
        if (!form.value.twins.length) {
            result = 0;
        } else {
            result = form.value.twins.reduce((total: number, item: any) => total + item.count_of_twins, 0)
        }
        return result;
    }

    const allMembersCount = computed(() => {
        return form.value.damagers.length + getTwinsCount() + form.value.count_of_randoms;
    })
    const isAvailableCount = computed(() => requiredCount.value === allMembersCount.value);

    const toggleForm = () => {
        isVisible.value = !isVisible.value;
    }

    const resetForm = () => {
        form.value.damagers = [];
        form.value.type = 'valakas';
        form.value.twins = [];
        form.value.count_of_randoms = 0;
        form.value.price_of_random = 0;
    }

    const submitForm = () => {
        if (!isAvailableCount.value) {
            ElNotification({
                type: 'error',
                message: `Общее число участников рейда: ${allMembersCount.value} из ${requiredCount.value}`
            })
            return;
        }
    }

    return {
        form,
        isDisabled,
        isAvailableCount,
        allMembersCount,
        isVisible,
        resetForm,
        toggleForm,
        submitForm,
    }
})