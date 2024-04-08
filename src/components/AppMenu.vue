<script lang="ts" setup>
import {
    Key,
    Document,
    Setting,
    DArrowRight,
} from '@element-plus/icons-vue';
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/stores/auth";
import {storeToRefs} from "pinia";

const router = useRouter();
const { isLoggedIn } = storeToRefs(useAuthStore());

const isCollapse = ref(true)
const menuItems = ref([
    { id: '1', title: 'Таблица', name: 'table', shown: true },
    { id: '2', title: 'КЛ вход', name: 'auth', shown: !isLoggedIn.value },
    { id: '3', title: 'Настройки', name: 'settings', shown: true },
]);

const toggleMenu = () => {
    isCollapse.value = !isCollapse.value;
}

const goToLink = async (name: string) => {
    await router.push({ name })
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
            <template
                v-for="item in menuItems"
                :key="item.id"
            >
                <el-menu-item
                    v-if="item.shown"
                    :index="item.name"
                    @click="goToLink(item.name)"
                >
                    <el-icon>
                        <Document v-if="item.name === 'table'"/>
                        <Key v-if="item.name === 'auth'"/>
                        <Setting v-if="item.name === 'settings'"/>
                    </el-icon>
                    <template #title>{{ item.title }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.menu {
    max-width: 200px;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 10;

    :deep(.el-menu) {
        background: $grey-bg-color;
        border: none;
        flex-grow: 1;
    }

    :deep(.el-menu-item) {
        font-size: 15px;
        color: #606060;

        &.is-active {
            color: $secondary-bg-color;
        }
    }

    &__toggle {
        width: 64px;
        cursor: pointer;
        transition: .3s;
        padding: 5px 0;

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