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
        comment: '',
    } as Form)
    const users = ref([
        {id: 1, name: 'IceCoffee', count_of_twins: 0, points: 0},
        {id: 2, name: 'iichka', count_of_twins: 0, points: 0},
        {id: 3, name: 'KissMyWeapon', count_of_twins: 0, points: 0},
        {id: 4, name: 'Query', count_of_twins: 0, points: 0},
        {id: 5, name: 'Клюквенный', count_of_twins: 0, points: 0},
    ])
    const damagers = ref([] as number[]);
    const twins = ref([]);
    const damagersSearch = ref('');
    const twinsSearch = ref('');
    const filteredDamagers = computed(() => {
        const filteredArray = users.value
            .filter((e) => e.name.toLowerCase().includes(damagersSearch.value.toLowerCase()))
        return filteredArray.length ? filteredArray : users.value;
    });
    const filteredTwinks = computed(() => {
        const filteredArray = users.value
            .filter((e) => e.name.toLowerCase().includes(twinsSearch.value.toLowerCase()))
        return filteredArray.length ? filteredArray : users.value;
    })
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
        form.value.twins.forEach((e: any) => e.count_of_twins = 0);
        form.value.damagers.forEach((e: any) => e.points = 0);
        form.value.damagers = [];
        form.value.type = 'valakas';
        form.value.twins = [];
        form.value.count_of_randoms = 0;
        form.value.price_of_random = 0;
        form.value.comment = '';

        damagersSearch.value = '';
        twinsSearch.value = '';
        damagers.value = [];
        twins.value = [];
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
        users,
        damagers,
        twins,
        form,
        damagersSearch,
        twinsSearch,
        isDisabled,
        isAvailableCount,
        allMembersCount,
        filteredDamagers,
        filteredTwinks,
        isVisible,
        resetForm,
        toggleForm,
        submitForm,
    }
})