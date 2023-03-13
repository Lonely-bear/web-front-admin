<route lang="yaml">
name: 首页
</route>

<script setup lang="ts">
import { StarFilled } from '@element-plus/icons-vue';
import avatarImg from '../assets/avatar.jpg'

const handleClick = () => {
    console.log('click')
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
    

<template>
    <el-row :gutter="24">
        <el-col :span="12">
            <div class="card admin">
                <el-avatar :size="50" :src="avatarImg" />
                <div class="admin-name">
                    欢迎您，<span style="font-weight: bold;">太吾村领头人</span>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="card admin">
                <el-avatar :size="50" :src="avatarImg" />
                <div class="admin-name">
                    欢迎您，<span style="font-weight: bold;">太吾村领头人</span>
                </div>
            </div>
        </el-col>
    </el-row>
    <br />
    <el-row :gutter="24">
        <el-col :span="18">
            <div class="card">
                <h3 style="display: flex;align-items: center;gap: 10px;">
                    <el-icon :size="20" color="orange">
                        <StarFilled />
                    </el-icon>
                    我的收藏
                </h3>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" width="400" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                            <el-button link type="primary" size="small">Edit</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="card">
            </div>
        </el-col>
    </el-row>
    <br />
    <el-row :gutter="24">
        <el-col :span="18">
            <div class="card">
                <h3 style="display: flex;align-items: center;gap: 10px;">
                    <el-icon :size="20" color="orange">
                        <StarFilled />
                    </el-icon>
                    我的收藏
                </h3>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" width="400" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                            <el-button link type="primary" size="small">Edit</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="card">
            </div>
        </el-col>
    </el-row>
    <br />
    <el-row :gutter="24">
        <el-col :span="18">
            <div class="card">
                <h3 style="display: flex;align-items: center;gap: 10px;">
                    <el-icon :size="20" color="orange">
                        <StarFilled />
                    </el-icon>
                    我的收藏
                </h3>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" width="400" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                            <el-button link type="primary" size="small">Edit</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="card">
            </div>
        </el-col>
    </el-row>
</template>

<style scoped>
.card {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.3s;
    border-radius: 4px;
}

.admin {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 16px;
}

.card:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.24);
}
</style>