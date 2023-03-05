<template>
    <div class="collapse-button">
        <el-icon size="1.2em" color="#337ecc" style="cursor: pointer;" @click="isCollapse = !isCollapse">
            <Fold v-if="!isCollapse" />
            <Expand v-else />
        </el-icon>
    </div>
    <el-scrollbar height="calc(100vh - 200px)">
        <el-menu router default-active="1-0" active-text-color="#337ecc" background-color="transparent"
            :collapse="isCollapse">
            <el-menu-item index="1-0" route="/">
                <el-icon>
                    <House />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Money />
                    </el-icon>
                    <span>经费管理</span>
                </template>
                <el-menu-item-group>
                    <template #title>
                        <el-tag color="#337ecc" style="color: #ffffff;user-select: none;cursor: auto;">
                            <el-icon>
                                <Connection />
                            </el-icon>
                            <span>学院</span>
                        </el-tag>
                    </template>
                    <el-menu-item index="1-1" class="small-memu-item" route="/funds/dept">
                        <el-icon>
                            <Postcard />
                        </el-icon>
                        <span>系部管理</span>
                    </el-menu-item>
                    <el-menu-item index="1-2" class="small-memu-item" route="/funds/dispatch">
                        <el-icon>
                            <Switch />
                        </el-icon>
                        <span>经费分发</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template #title>
                        <el-tag color="#529b2e" style="color: #ffffff;user-select: none;cursor: auto;">
                            <el-icon>
                                <Connection />
                            </el-icon>
                            <span>系部</span>
                        </el-tag>
                    </template>
                    <el-menu-item index="1-3" class="small-memu-item" route="/funds/apply">
                        <el-icon>
                            <Tickets />
                        </el-icon>
                        <span>申请列表</span>
                    </el-menu-item>
                    <el-menu-item index="1-4" class="small-memu-item" route="/funds/ledger">
                        <el-icon>
                            <Wallet />
                        </el-icon>
                        <span>流水账单</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Operation />
                    </el-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="2-1" class="small-memu-item" route="/system/admin">
                    <el-icon>
                        <Postcard />
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-menu-item index="2-2" class="small-memu-item" route="/system/role">
                    <el-icon>
                        <Switch />
                    </el-icon>
                    <span>角色管理</span>
                </el-menu-item>
                <el-menu-item index="2-3" class="small-memu-item" route="/system/permission">
                    <el-icon>
                        <Switch />
                    </el-icon>
                    <span>权限管理</span>
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3" route="/chart">
                <el-icon>
                    <DataAnalysis />
                </el-icon>
                <template #title>报表管理</template>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    Operation,
    DataAnalysis,
    Money,
    Wallet,
    Tickets,
    Postcard,
    Switch,
    Connection,
    Fold,
    Expand,
House
} from '@element-plus/icons-vue'

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