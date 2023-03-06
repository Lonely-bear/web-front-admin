<template>
    <el-menu-item-group style="margin-left: 2em;margin-right: 1em">
        <template #title>
            <el-tag :color="menuGroup.group_color" style="color: #ffffff;user-select: none;cursor: auto;display: flex;align-items: center;">
                <el-icon>
                    <component :is="menuGroup.group_icon" />
                </el-icon>
                <span>{{ menuGroup.group_name }}</span>
            </el-tag>
        </template>
        <menu-item-group v-for="(menuGroupItem, menuGroupItemIndex) in menuGroup.childrenGroups" :key="menuGroupItemIndex"
            :menu-group="menuGroupItem"></menu-item-group>
        <menu-item :item="menuItem" v-for="(menuItem, menuItemIndex) in menuGroup.children" :key="menuItemIndex" />
    </el-menu-item-group>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';

defineProps({
    menuGroup: {
        type: Object,
        required: true
    }
})
</script>