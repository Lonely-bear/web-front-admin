<!-- eslint-disable vue/multi-word-component-names -->
<route lang="yaml">
    name: 报表管理
</route>
    
<script setup lang="ts">
import type { Columns, TableOptions } from '@/components/table/@types';
import { inject, onBeforeMount, ref } from 'vue';
import CustomTable from '@/components/table/CustomTable.vue'

const { $api, $xlsx } = inject('global') as { $api?: any, $xlsx?: any }

const tableData = ref<any[] | null>(null);
function initTableData() {
    $api({
        url: '/chart/charts',
        method: 'GET'
    }).then((res: any) => {
        tableData.value = res.data.data
        console.log(tableData.value)
    })
}
onBeforeMount(() => initTableData())


// 新增对象
const add = ref({
    showDialog: false,
    formData: {
        chart_name: "",
        chart_user: "",
        chart_link: "",
        chart_time: "",
    } as any,
    confirm() {
        add.value.showDialog = false;
        $api({
            url: "/chart",
            method: "POST",
            data: add.value.formData
        }).then(() => initTableData())
    },
    cancel() {
        add.value.showDialog = false
    },
    handleClick() {
        add.value.showDialog = true
    }
})

// 修改对象
const edit = ref({
    showDialog: false,
    formData: {
        _id: "",
        chart_name: "",
        chart_user: "",
        chart_link: "",
        chart_time: "",
    } as any,
    confirm() {
        edit.value.showDialog = false;
        $api({
            url: `/chart/${edit.value.formData._id}`,
            method: "PUT",
            data: edit.value.formData
        }).then(() => initTableData())
    },
    cancel() {
        edit.value.showDialog = false
    },
    handleClick(row: any) {
        Object.keys(edit.value.formData).forEach(key => edit.value.formData[key as keyof typeof edit.value.formData] = row[key]);
        edit.value.showDialog = true
    }
})

// 删除对象
const deleteModel = ref({
    confirm(row: any) {
        $api({
            url: `/chart/${row._id}`,
            method: "DELETE"
        }).then(() => initTableData())
    }
})

// xlsx导出excel表格
function exportXlsx(fileName: string) {
    fileName = fileName ?? new Date().toDateString()
    const xlsxHead = {
        _id: "报表ID",
        chart_name: "报表名称",
        chart_user: "责任人",
        chart_link: "报表下载链接",
        chart_time: "报表生成时间",
    }
    const copy = tableData.value?.map(item => {
        const obj: any = {};
        for (const key in xlsxHead) {
            if (xlsxHead[key as keyof typeof xlsxHead]) {
                obj[xlsxHead[key as keyof typeof xlsxHead]] = item[key];
            }
        }
        return obj
    })
    const sheet = $xlsx.utils.json_to_sheet(copy);
    const book = $xlsx.utils.book_new();
    $xlsx.utils.book_append_sheet(book, sheet, 'data');
    $xlsx.writeFile(book, `${fileName}.xlsx`);
}

const tableOptions: TableOptions = {
    search: {
        visible: true,
        filters: ['_id', 'chart_name', 'chart_user']
    },
    column: {
        hiddens: ['__v'],
        buttonGroup: [
            {
                text: '编辑',
                attrs: {
                    icon: 'edit',
                    type: 'primary',
                    link: true
                },
                onClick: edit.value.handleClick
            }, {
                text: '删除',
                attrs: {
                    icon: 'delete',
                    type: 'danger',
                    link: true
                },
                onClick: deleteModel.value.confirm
            }
        ]
    },
    topTools: {
        visible: true,
        buttonGroup: [
            {
                text: '新增数据',
                attrs: {
                    icon: 'plus',
                    type: 'primary',
                },
                onClick: add.value.handleClick
            },
            {
                text: '导出数据',
                attrs: {
                    icon: 'download',
                    type: 'default'
                },
                onClick: exportXlsx
            }
        ]
    },
    pagination: {
        visible: true
    },
    table: {
        attrs: {
            height: 'calc(100vh - 450px)'
        }
    }
}

const columnOptions: Columns[] = [
    {
        prop: '_id',
        label: '报表ID'
    }, {
        prop: 'chart_name',
        label: '报表名称'
    }, {
        prop: 'chart_user',
        label: '责任人'
    }, {
        prop: 'chart_link',
        label: '报表下载链接',
        render: {
            componentName: 'el-link',
            componentAttrs: {
                type: 'primary'
            }
        },
        attrs: {
            width: '300px'
        }
    }, {
        prop: 'chart_time',
        label: '报表生成时间',
        dataType: 'date'
    }
]
</script>
    
<template>
    <CustomTable v-if="tableData" :table-data="tableData" :table-options="tableOptions" :column-options="columnOptions" />

    <!-- 添加 -->
    <el-dialog v-model="add.showDialog" width="30%" :close-on-click-modal="false">
        <template #header>
            添加数据
        </template>
        <el-form :data="add.formData" label-width="100px">
            <el-form-item :label="item.label ?? item.prop" v-for="item in columnOptions" :key="item.prop">
                <el-input v-model="add.formData[item.prop]" :placeholder="`请输入${item.label ?? item.prop}`"
                    :disabled="item.prop === '_id'"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="add.cancel">取消</el-button>
                <el-button type="primary" @click="add.confirm">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog v-model="edit.showDialog" width="30%" :close-on-click-modal="false">
        <template #header>
            修改数据
        </template>
        <el-form :data="edit.formData" label-width="100px">
            <el-form-item :label="item.label ?? item.prop" v-for="item in columnOptions" :key="item.prop">
                <el-input v-model="edit.formData[item.prop]" :placeholder="`请输入${item.label ?? item.prop}`"
                    :disabled="item.prop === '_id'"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="edit.cancel">取消</el-button>
                <el-button type="primary" @click="edit.confirm">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>