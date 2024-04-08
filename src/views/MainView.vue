<script lang="ts" setup>
import AppTable from "@/components/AppTable.vue";
import AppForm from "@/components/AppForm.vue";
import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/auth";

const { isVisible } = storeToRefs(useFormStore());
const { isLoggedIn } = useAuthStore();
const { toggleForm, resetForm } = useFormStore();
</script>

<template>
    <main class="container">
       <app-table />

        <div class="controls">
            <el-button type="primary" @click="toggleForm">
                Добавить заход
            </el-button>
            <el-button v-if="isLoggedIn" type="primary">
                Редактировать
            </el-button>
        </div>

        <el-dialog v-model="isVisible" @closed="resetForm">
            <app-form />
        </el-dialog>
    </main>
</template>

<style lang="scss" scoped>
.controls {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

:deep(.el-button) {
    margin: 0;
}
</style>