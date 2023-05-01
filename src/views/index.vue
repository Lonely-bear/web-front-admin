<!-- eslint-disable vue/multi-word-component-names -->
<route lang="yaml">
name: 首页
</route>

<script setup lang="ts">
import type { ResponseType } from 'axios';
import { inject } from 'vue';
import avatarImg from '../assets/avatar.jpg'
const { $api } = inject("global") as { $api?: any, $xlsx?: any }
$api({
    url: 'user/users',
    method: 'get'
}).then((res: ResponseType) => console.log(res))
</script>
    

<template>
    <el-row :gutter="24">
        <el-col :span="12">
            <div class="card admin">
                <el-avatar :size="50" :src="avatarImg" />
                <div class="admin-name">
                    欢迎您，<span style="font-weight: bold;">王康</span>
                </div>
            </div>
        </el-col>
    </el-row>
    <br />
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