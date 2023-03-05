<template>
    <el-card class="aside-container" shadow="never" body-style="padding: 0;">
        <slot></slot>
    </el-card>
</template>

<style scoped>
.aside-container {
    /* min-width: 100%; */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(250, 252, 255, 0.8);
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
}
</style>