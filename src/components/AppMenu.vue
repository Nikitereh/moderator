<script lang="ts" setup>
import {
    Key,
    Document,
    Setting,
    DArrowRight,
} from '@element-plus/icons-vue';
import {ref} from "vue";

const isCollapse = ref(true)
const menuItems = ref([
    { id: '1', title: 'Таблица', name: 'table', icon: Document },
    { id: '2', title: 'КЛ вход', name: 'auth', icon: Key },
    { id: '3', title: 'Настройки', name: 'settings', icon: Setting },
]);

const toggleMenu = () => {
    isCollapse.value = !isCollapse.value;
}
</script>

<template>
    <aside class="menu">
        <div class="menu__toggle" @click="toggleMenu">
            <el-icon
                color="#409eff"
                size="large"
                class="menu__icon-toggle"
                :class="{'menu__icon-toggle--active': !isCollapse}"
            >
                <DArrowRight />
            </el-icon>
        </div>

        <el-menu
            default-active="table"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
            <el-menu-item
                v-for="item in menuItems"
                :key="item.id"
                :index="item.name"
            >
                <el-icon>
                    <Document v-if="item.name === 'table'"/>
                    <Key v-if="item.name === 'auth'"/>
                    <Setting v-if="item.name === 'settings'"/>
                </el-icon>
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.menu {
    max-width: 200px;

    :deep(.el-menu) {
        background: $grey-bg-color;
        border: none;
    }

    :deep(.el-menu-item) {
        font-size: 15px;
    }

    &__toggle {
        width: 64px;
        background: $grey-bg-color;
        cursor: pointer;
        transition: .3s;
        padding: 5px 0;
        border-bottom: 2px solid #505050;

        &:hover {
            background: #505050;
        }
    }

    &__icon-toggle {
        transition: .3s;
        &--active {
            transform: rotate(180deg);
        }
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>