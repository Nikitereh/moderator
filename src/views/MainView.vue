<script lang="ts" setup>
import AppTable from "@/components/AppTable.vue";
import AppForm from "@/components/AppForm.vue";
import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";

const { isVisible } = storeToRefs(useFormStore());
const { toggleForm, resetForm } = useFormStore();
</script>

<template>
    <main class="container">
       <app-table />

        <div class="">
            <el-button type="primary" @click="toggleForm">
                Добавить заход
            </el-button>
        </div>

        <el-dialog v-model="isVisible" @closed="resetForm">
            <app-form />
        </el-dialog>
    </main>
</template>

<style lang="scss" scoped>

</style>