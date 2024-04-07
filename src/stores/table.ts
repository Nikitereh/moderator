import {defineStore} from "pinia";
import {ref} from "vue";
import {TableItem} from "@/models/Table";
import {getTableData} from "@/services/api/table";

export const useTableStore = defineStore('table', () => {
    const isLoading = ref<boolean>(false);
    const tableData = ref<TableItem[]>([] as TableItem[]);

    const fetchTableData = async () => {
        tableData.value = await getTableData();
    }

    return {
        isLoading,
        tableData,
        fetchTableData,
    }
})