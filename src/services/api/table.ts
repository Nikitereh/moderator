import {httpApi} from "@/services/httpApi";

export async function getTableData() {
    const response = await httpApi.get('/todos/2');
    return response.data;
}