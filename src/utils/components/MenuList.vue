<template>
    <el-menu router :default-active="defaultActive" active-text-color="#337ecc" background-color="transparent"
        :collapse="props.collapse">
        <template v-for="(item, index) in $system.MENU_LIST" :key="index">
            <menu-item :item="item" />
        </template>
    </el-menu>
</template>

<script setup lang="ts">
import MenuItem from '@/utils/components/MenuItem.vue';
import { getCurrentInstance, ref } from 'vue';
import type { MENU, SYSTEM_CONFIG_TYPE } from '../system/system.config.types';
import { useRouter } from 'vue-router';

// 系统配置全局变量
const { proxy }: any = getCurrentInstance();
const $system: SYSTEM_CONFIG_TYPE = proxy.$system;

// 监听当前路由，修改菜单选中项
const router = useRouter();
const currentRoutePath = router.currentRoute.value.path;
const defaultActive = ref<string | number>("");
$system.MENU_LIST.forEach(item => {
    if (item.route === currentRoutePath) {
        defaultActive.value = item._id
    } else if (item.children) {
        item.children.forEach(i => {
            if (i.route === currentRoutePath) {
                defaultActive.value = i._id
            }
        })
    }
})

/**
 * 菜单数组排序
 * @param menu 菜单数组
 * @param order 顺序 ==> 'asc' | 'desc'
 */
function sortMenu(menu: MENU[], order: 'asc' | 'desc') {
    if (order === 'asc') {
        menu.sort((prev, next) => prev.order - next.order);
    } else {
        menu.sort((prev, next) => next.order - prev.order);
    }
    menu.forEach(item => {
        if (item.children) {
            sortMenu(item.children, order)
        }
    })
}
sortMenu($system.MENU_LIST, 'asc');


const props = defineProps({
    collapse: {
        type: Boolean,
        required: false
    }
})
</script>

<style scoped>
.el-menu--popup-bottom-start .el-menu-item:hover {
    color: rgba(86, 86, 86, 1) !important;
}

.el-menu--popup-bottom-start .el-menu-item {
    background: #fff !important;
}
</style>