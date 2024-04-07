<script lang="ts" setup>
import {onMounted} from "vue";
import {useTableStore} from "@/stores/table";
import {storeToRefs} from "pinia";
import {Star} from '@element-plus/icons-vue'

const { fetchTableData } = useTableStore();
const { isLoading, tableData } = storeToRefs(useTableStore());

onMounted(async () => {
    await fetchTableData();
})
</script>

<template>
    <div class="table-wrapper">
        <el-table
            :data="tableData"
            :row-class-name="'table__row'"
            class="table"
            border
            style="width: 100%;"
        >
            <el-table-column type="index" width="50" label="№" />
            <el-table-column prop="name" label="Ник" width="200">
                <template #default={row}>
                    <div class="table__cell-name">
                        <span>{{ row.name }}</span>
                        <el-icon v-if="row.hasIcon" size="large">
                            <Star />
                        </el-icon>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="block1" label="block1" />
            <el-table-column prop="block2" label="block2" />
            <el-table-column prop="block3" label="block3" />
            <el-table-column prop="block4" label="block4" />
            <el-table-column prop="twin" label="twin" />
            <el-table-column prop="all" label="Всего" />
            <el-table-column prop="result" label="Итог" />
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.table-wrapper {
    padding-left: 32px;
}

.table {
    color: #fff;

    :deep(.el-table) {
        font-size: 15px;
    }

    :deep(th) {
        background-color: $grey-bg-color;
    }

    :deep(tr) {
        background-color: $grey-bg-color;
        pointer-events: none;
    }

    &__cell-name {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}
</style>