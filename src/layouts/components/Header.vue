<template>
    <div class="header-container">
        <el-button-group>
            <el-button type="primary" color="#337ecc" style="letter-spacing: 0.1em;">
                高校经费运行管理系统
            </el-button>
            <el-button type="primary" color="#337ecc">
                <el-icon>
                    <House />
                </el-icon>
            </el-button>
        </el-button-group>
        <div class="nav-list">
            <div class="nav-item readonly">
                <span>运行环境</span>
                <el-icon>
                    <DArrowRight />
                </el-icon>
                <el-tooltip effect="dark" content="development（开发环境）" placement="bottom-start">
                    <el-tag style="font-weight: bold;" type="success" effect="dark">
                        dev
                    </el-tag>
                </el-tooltip>
                <el-tooltip effect="dark" content="testing（测试环境）" placement="bottom-start">
                    <el-tag style="font-weight: bold;" type="warning" effect="dark">
                        test
                    </el-tag>
                </el-tooltip>
                <el-tooltip effect="dark" content="production（生产环境）" placement="bottom-start">
                    <el-tag style="font-weight: bold;" color="#409eff" effect="dark">
                        prod
                    </el-tag>
                </el-tooltip>
            </div>
            <div class="nav-item">
                <div class="devider"></div>
            </div>
            <div class="nav-item">
                <el-icon size="1.2em" color="#409EFF">
                    <School />
                </el-icon>
                <span>学院信息</span>
            </div>
            <div class="nav-item">
                <div class="devider"></div>
            </div>
            <div class="nav-item">
                <el-icon size="1.2em" color="#337ecc">
                    <Setting />
                </el-icon>
                <span style="margin-right: 5px;">设置</span>
                <el-icon>
                    <ArrowDown />
                </el-icon>
            </div>
            <el-popover :visible="clearCachePopover" placement="bottom" :width="160">
                <p>Are you sure to delete this?</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="small" text @click="handleCancel">cancel</el-button>
                    <el-button size="small" type="primary" @click="handleConfirm">confirm</el-button>
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
            <div class="nav-item">
                <el-icon size="1.2em" color="#529b2e">
                    <FullScreen />
                </el-icon>
                <span>全屏</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { House, ArrowDown, Setting, Brush, FullScreen, School, DArrowRight } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'
import { ref } from 'vue';

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
.header-container {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 8px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
}

.nav-list {
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.5em;
    margin-left: 2em;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* align-items: flex-end; */
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

.devider {
    width: 1px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: auto;
}

.readonly {
    user-select: none;
}

.readonly:hover {
    opacity: 1;
}
</style>