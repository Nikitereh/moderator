<script lang="ts" setup>
import AuthForm from "@/components/auth/AuthForm.vue";
</script>

<template>
    <div class="auth">
        <el-card class="auth__card">
            <auth-form />
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.auth {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    &__card {
        max-width: 400px;
        width: 100%;
    }
}
</style>