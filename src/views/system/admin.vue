<route lang="yaml">
name: 用户管理
</route>

<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, ref } from 'vue';
const { proxy }: any = getCurrentInstance();
const $api = proxy.$api;
const $xlsx = proxy.$xlsx;

const tableData = ref(null);
function initTableData() {
    $api({
        url: '/user/users',
        method: 'GET'
    }).then((res: any) => {
        tableData.value = res.data
    })
}
onBeforeMount(() => initTableData())

// 新增对象
const add = ref({
    showDialog: false,
    formData: {
        user_name: "",
        pass_word: "",
        role_id: ""
    },
    confirm() {
        add.value.showDialog = false;
        $api({
            url: "/user",
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
        user_name: "",
        pass_word: "",
        role_id: ""
    },
    confirm() {
        edit.value.showDialog = false;
        $api({
            url: `/user/${edit.value.formData._id}`,
            method: "PUT",
            data: edit.value.formData
        }).then(() => initTableData())
    },
    cancel() {
        edit.value.showDialog = false
    },
    handleClick(row: any) {
        Object.keys(edit.value.formData).forEach(key => edit.value.formData[key] = row[key]);
        edit.value.showDialog = true
    }
})

// 删除对象
const deleteModel = ref({
    confirm(row) {
        $api({
            url: `/user/${row._id}`,
            method: "DELETE"
        }).then(() => initTableData())
    }
})

// xlsx导出excel表格
function exportXlsx(fileName: string) {
    const xlsxHead = {
        _id: "用户Id",
        user_name: "用户名",
        pass_word: "密码",
        role_id: "角色Id"
    }
    const copy = tableData.value?.data.map(item => {
        const obj = {};
        for (const key in xlsxHead) {
            if (xlsxHead[key]) {
                obj[xlsxHead[key]] = item[key];
            }
        }
        return obj
    })
    const sheet = $xlsx.utils.json_to_sheet(copy);
    const book = $xlsx.utils.book_new();
    $xlsx.utils.book_append_sheet(book, sheet, 'data');
    $xlsx.writeFile(book, `${fileName}.xlsx`);
}
</script>

<template>
    <div>
        <el-button type="success" icon="Plus" @click="add.handleClick">新增</el-button>
        <el-button type="primary" icon="Link" @click="exportXlsx('管理员用户信息')">导出</el-button>
    </div>
    <el-table v-if="tableData" :data="tableData.data">
        <el-table-column label="_id" prop="_id"></el-table-column>
        <el-table-column label="用户名" prop="user_name"></el-table-column>
        <el-table-column label="密码" prop="pass_word"></el-table-column>
        <el-table-column label="角色" prop="role_id"></el-table-column>
        <el-table-column label="操作">
            <template v-slot="scope">
                <el-button link type="primary" @click="edit.handleClick(scope.row)">修改</el-button>
                <el-popconfirm width="220" confirm-button-text="删除" cancel-button-text="取消" icon-color="#626AEF"
                    title="确认删除该记录?" @confirm="deleteModel.confirm(scope.row)">
                    <template #reference>
                        <el-button link type="danger">删除</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>

    <!-- 添加用户 -->
    <el-dialog v-model="add.showDialog" width="30%" :close-on-click-modal="false">
        <template #header>
            添加管理员用户
        </template>
        <el-form :data="add.formData" label-width="60px">
            <el-form-item label="用户名">
                <el-input v-model="add.formData.user_name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="add.formData.pass_word" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-input v-model="add.formData.role_id" placeholder="请输入角色id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="add.cancel">取消</el-button>
                <el-button type="primary" @click="add.confirm">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 修改用户 -->
    <el-dialog v-model="edit.showDialog" width="30%" :close-on-click-modal="false">
        <template #header>
            修改管理员用户
        </template>
        <el-form :data="edit.formData" label-width="60px">
            <el-form-item label="用户名">
                <el-input v-model="edit.formData.user_name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="edit.formData.pass_word" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-input v-model="edit.formData.role_id" placeholder="请输入角色id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="edit.cancel">取消</el-button>
                <el-button type="primary" @click="edit.confirm">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>