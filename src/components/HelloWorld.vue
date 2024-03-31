<script setup lang="ts">
import {onMounted} from "vue";
import {useAuthStore} from "@/stores/auth";
import {storeToRefs} from "pinia";

const { testData } = storeToRefs(useAuthStore());
const { testFunction } = useAuthStore();

onMounted(async () => {
    await testFunction();
})
</script>

<template>
    <div class="app">
        <el-button type="primary">test</el-button>
        {{ testData }}
    </div>
</template>