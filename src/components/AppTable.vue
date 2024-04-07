<script lang="ts" setup>
import {onMounted} from "vue";
import {useTableStore} from "@/stores/table";
import {storeToRefs} from "pinia";

const { fetchTableData } = useTableStore();
const { isLoading, tableData } = storeToRefs(useTableStore());

onMounted(async () => {
    await fetchTableData();
})
</script>

<template>
    <div class="table">
        {{tableData}}
    </div>
</template>

<style lang="scss" scoped>
.table {
    color: #fff;
}
</style>