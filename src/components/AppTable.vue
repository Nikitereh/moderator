<script lang="ts" setup>
import {onMounted} from "vue";
import {useTableStore} from "@/stores/table";
import {storeToRefs} from "pinia";
import {Star} from '@element-plus/icons-vue'

const {fetchTableData} = useTableStore();
const {isLoading, tableData} = storeToRefs(useTableStore());

onMounted(async () => {
    await fetchTableData();
})
</script>

<template>
    <el-table
        :data="tableData"
        :row-class-name="'table__row'"
        class="table"
        border
        style="width: 100%;"
    >
        <el-table-column type="index" width="50" label="№"/>
        <el-table-column prop="name" label="Ник" width="170">
            <template #default={row}>
                <div class="table__cell-name">
                    <span>{{ row.name }}</span>
                    <el-icon v-if="row.hasIcon" size="large">
                        <Star/>
                    </el-icon>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="block1" label="Баллы за заходы" width="140"/>
        <el-table-column prop="twin" label="Твины (кол-во)" width="140"/>
        <el-table-column prop="block2" label="Баллы за твинов" width="140"/>
        <el-table-column prop="all" label="Всего баллов" width="140"/>
        <el-table-column prop="result" label="Итог (адена)" width="140"/>
    </el-table>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

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