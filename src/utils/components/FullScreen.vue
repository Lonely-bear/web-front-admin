<template>
    <div class="nav-item" @click="openFullScreen">
        <el-icon size="1.2em" color="#529b2e">
            <FullScreenIcon />
        </el-icon>
        <span>全屏</span>
    </div>
</template>

<script setup lang="ts">
import { FullScreen as FullScreenIcon } from '@element-plus/icons-vue'

function openFullScreen() {
    document.body.requestFullscreen();
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