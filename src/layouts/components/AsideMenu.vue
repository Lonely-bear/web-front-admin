<template>
    <div class="collapse-button">
        <el-icon size="1.2em" color="#337ecc" style="cursor: pointer;" @click="isCollapse = !isCollapse">
            <Fold v-if="!isCollapse" />
            <Expand v-else />
        </el-icon>
    </div>
    <el-scrollbar height="calc(100vh - 200px)">
        <!-- 菜单 -->
        <menu-list :collapse="isCollapse" />
    </el-scrollbar>
</template>

<script lang="ts" setup>
import {
    Fold,
    Expand,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
import MenuList from '@/utils/components/MenuList.vue';

const isCollapse = ref(false)
</script>

<style>
.el-menu {
    border: none;
}

.collapse-button {
    width: 100%;
    height: fit-content;
    text-align: right;
    padding: 1em;
    box-sizing: border-box;
}

.small-memu-item {
    color: #606266;
    font-size: 13px;
    user-select: none;
}
</style>