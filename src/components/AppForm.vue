<script lang="ts" setup>
import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";
import { ref, watch} from "vue";

const {
    form,
    isDisabled,
    users,
    twinsSearch,
    damagersSearch,
    filteredDamagers,
    filteredTwinks,
    damagers,
    twins,
} = storeToRefs(useFormStore());
const {submitForm, resetForm} = useFormStore();



const filterById = (items: any, idArr: number[]) => {
    return items.filter(item => idArr.includes(item.id));
}

watch(twins, () => {
    form.value.twins = filterById(users.value, twins.value)
}, {deep: true})

watch(damagers, () => {
    form.value.damagers = filterById(users.value, damagers.value)
}, {deep: true})
</script>

<template>
    <el-form :model="form" ref="ruleFormRef" class="form" size="large">
        <p class="form__title">Добавить заход</p>
        <el-scrollbar max-height="600px" class="form__content">
            <el-form-item label="Активность" required>
                <el-radio-group v-model="form.type" size="large">
                    <el-radio value="valakas" size="large">Валакас</el-radio>
                    <el-radio value="frintezza">Фринтеза</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="Основные персонажи" required>
                <el-select
                    v-model="damagers"
                    multiple
                    collapse-tags
                    collapse-tags-tooltip
                    :max-collapse-tags="3"
                    placeholder="Select"
                    class="form__select"
                >
                    <el-input v-model="damagersSearch" size="default" class="form__input-search" placeholder="Поиск"/>
                    <el-option
                        v-for="user in filteredDamagers"
                        :key="user.id"
                        :value="user.id"
                        :label="user.name"
                    />
                </el-select>

                <div v-if="form.damagers.length" class="form__item-sublist">
                    <div v-for="damager in form.damagers" :key="damager.id" class="form__item-sub">
                        <div class="form__item-sub-name">
                            {{ damager.name }}
                        </div>

                        <div style="line-height: 20px">
                            <span style="line-height: 20px; margin-right: 8px">баллов</span>
                            <el-input-number v-model="damager.points" :step="5" size="small" :min="0" :max="100"/>
                        </div>
                    </div>
                </div>
            </el-form-item>

            <el-form-item label="Твины" required>
                <el-select
                    v-model="twins"
                    multiple
                    collapse-tags
                    collapse-tags-tooltip
                    :max-collapse-tags="3"
                    placeholder="Select"
                    class="form__select"
                >
                    <el-input v-model="twinsSearch" size="default" class="form__input-search" placeholder="Поиск"/>
                    <el-option
                        v-for="user in filteredTwinks"
                        :key="user.id"
                        :value="user.id"
                        :label="user.name"
                    />
                </el-select>

                <div v-if="form.twins.length" class="form__item-sublist">
                    <div v-for="twin in form.twins" :key="twin.id" class="form__item-sub">
                        <div class="form__item-sub-name">
                            {{ twin.name }}
                        </div>
                        <div style="line-height: 20px">
                            <span style="line-height: 20px; margin-right: 8px">количество</span>
                            <el-input-number v-model="twin.count_of_twins" size="small" :min="0" :max="14"/>
                        </div>
                    </div>
                </div>
            </el-form-item>

            <el-form-item label="Количество рандомов">
                <el-input-number v-model="form.count_of_randoms" :min="0" :max="14" size="default"/>
            </el-form-item>

            <el-form-item v-if="form.count_of_randoms > 0" label="Стоимость одного рандома (кк)">
                <el-input-number v-model="form.price_of_random" :min="0" :max="99" size="default"/>
            </el-form-item>

            <el-form-item>
                <el-input
                    v-model="form.comment"
                    :rows="3"
                    type="textarea"
                    placeholder="Комментарий (не обязательно)"
                />
            </el-form-item>

            <el-form-item>
                <div class="form__controls">
                    <el-button @click="resetForm">Отмена</el-button>
                    <el-button type="primary" :disabled="isDisabled" @click="submitForm">
                        Подвтердить
                    </el-button>
                </div>
            </el-form-item>
        </el-scrollbar>
    </el-form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__title {
        font-weight: 600;
        font-size: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e8e8e8;
    }

    &__item-sublist {
        width: 100%;
        margin-top: 7px;
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    &__item-sub {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        border-radius: 4px;
        padding: 4px 8px;
        border: 1px solid #e8e8e8;

        &-name {
            line-height: 20px;
        }
    }

    &__controls {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    :deep(.el-form-item) {
        flex-direction: column;
    }

    :deep(.el-form-item__label) {
        justify-content: flex-start;
        font-weight: 600;
        font-size: 16px;
    }

    :deep(.el-radio__label) {
        font-size: 16px;
    }

    :deep(.el-scrollbar) {
        padding: 0 10px;
    }

    &__input-search {
        padding: 0 10px;
    }
}
</style>