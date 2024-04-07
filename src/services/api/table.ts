import {httpApi} from "@/services/httpApi";
import {TableItem} from "@/models/Table";

export async function getTableData() {
    const response: { data: TableItem[] } = {
        data: [
            { id: 1, name: 'IceCoffee', block1: 23, block2: 2, block3: 34, block4: 45, twin: 11, all: 677, result: 655991, hasIcon: true },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
            { id: 2, name: 'KissMyWeapon', block1: 45, block2: 25, block3: 11, block4: 36, twin: 32, all: 548, result: 450933, },
        ]
    }
    return response.data;
}