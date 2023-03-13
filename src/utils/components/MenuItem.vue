<template>
    <el-sub-menu v-if="item.children" :index="item._id">
        <template #title>
            <el-icon v-if="item.icon">
                <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
        </template>
        <menu-item :item="menuItem" v-for="(menuItem, menuItemIndex) in item.children" :key="menuItemIndex" />
    </el-sub-menu>
    <el-menu-item v-else :index="item._id" :route="item.route">
        <el-icon v-if="item.icon">
            <component :is="item.icon" />
        </el-icon>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<script setup lang="ts">
const { item } = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.el-menu-item {
    padding-right: 40px !important;
}

.el-menu-item:hover {
    outline: 0 !important;
    color: #000 !important;
    background: #d1e7ff !important;
    border-radius: 4px;
}

.el-menu-item.is-active {
    color: #fff !important;
    background: #337ecc !important;
    border-radius: 4px;
}
</style>