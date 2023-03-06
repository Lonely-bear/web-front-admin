<template>
    <el-popover :visible="clearCachePopover" placement="bottom" :width="160">
        <p>你确定要清除本地缓存吗 ？</p>
        <div style="text-align: right; margin: 0">
            <el-button size="small" text @click="handleCancel">取消</el-button>
            <el-button size="small" type="primary" @click="handleConfirm">确定</el-button>
        </div>
        <template #reference>
            <div class="nav-item" @click="clearCachePopover = true">
                <el-icon size="1.2em" color="#c45656">
                    <Brush />
                </el-icon>
                <span>清除缓存</span>
            </div>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus';
import { ref } from 'vue';
import { Brush } from '@element-plus/icons-vue'


// 清除缓存
const clearCachePopover = ref<Boolean>(false);
function handleConfirm() {
    localStorage.clear();
    sessionStorage.clear();
    ElNotification({
        title: 'Success',
        message: '清除全局缓存成功！',
        type: 'success',
        duration: 2000
    })
    clearCachePopover.value = false;
}
function handleCancel() {
    clearCachePopover.value = false;
}
</script>

<style scoped>
.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5em;
    cursor: pointer;
}

.nav-item:hover {
    opacity: 0.8;
}

.nav-item>span {
    letter-spacing: 0.1em;
}
</style>