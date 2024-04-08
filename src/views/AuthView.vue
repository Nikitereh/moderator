<script lang="ts" setup>
import AuthForm from "@/components/auth/AuthForm.vue";
</script>

<template>
    <div class="auth">
        <el-card>
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
}
</style>