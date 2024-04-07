<script lang="ts" setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
    <div class="layout layout--main">
        <app-menu />
        <slot />
    </div>
</template>