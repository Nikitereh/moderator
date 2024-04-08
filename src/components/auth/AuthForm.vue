<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/auth";

const { form, isDisabled, isLoading } = storeToRefs(useAuthStore());
const { submitForm } = useAuthStore();
</script>

<template>
    <el-form :model="form" class="form" size="large">
        <p class="form__title">Добро пожаловать</p>
        <el-scrollbar max-height="600px" class="form__content">
            <el-form-item label="Email" required>
                <el-input v-model.trim="form.login" placeholder="Введите почту"/>
            </el-form-item>

            <el-form-item label="Пароль" required>
                <el-input v-model.trim="form.password" placeholder="Введите пароль"/>
            </el-form-item>

            <el-form-item>
                <div class="form__controls">
                    <el-button type="primary" :disabled="isDisabled" :loading="isLoading" @click="submitForm">
                        Войти
                    </el-button>
                </div>
            </el-form-item>
        </el-scrollbar>
    </el-form>
</template>

<style lang="scss" scoped>
.form {
    min-width: 400px;

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
}
</style>