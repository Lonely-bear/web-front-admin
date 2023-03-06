<template>
    <div class="header-container">
        <el-button-group>
            <el-button type="primary" color="#337ecc" style="letter-spacing: 0.1em;">
                {{ $system.SYSTEM_NAME }}
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
                <el-tooltip effect="dark" :content="environmentTheme.content" placement="bottom-start">
                    <el-tag style="font-weight: bold;" :type="environmentTheme.type" :color="environmentTheme.color"
                        effect="dark">
                        {{ $system.RUNNING_ENVIRONMENT }}
                    </el-tag>
                </el-tooltip>
            </div>
            <div class="nav-item">
                <div class="devider"></div>
            </div>
            <div class="nav-item" v-for="(item, index) in $system.OTHER_TOOLS_BOX" :key="index">
                <el-icon size="1.2em" color="#409EFF">
                    <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.name }}</span>
            </div>
            <div class="nav-item">
                <div class="devider"></div>
            </div>
            <div class="nav-item" v-if="$system.TOOLS_BOX.system_setting">
                <el-icon size="1.2em" color="#337ecc">
                    <Setting />
                </el-icon>
                <span style="margin-right: 5px;">设置</span>
                <el-icon>
                    <ArrowDown />
                </el-icon>
            </div>
            <CleanCache v-if="$system.TOOLS_BOX.clean_cache" />
            <FullScreen v-if="$system.TOOLS_BOX.full_screen" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SYSTEM_CONFIG_TYPE } from '@/utils/system/system.config.types';
import { House, ArrowDown, Setting, DArrowRight } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-notification.css'
import { getCurrentInstance, computed } from 'vue';
import CleanCache from '@/utils/components/CleanCache.vue';
import FullScreen from '@/utils/components/FullScreen.vue';

// 系统配置全局变量
const { proxy }: any = getCurrentInstance();
const $system: SYSTEM_CONFIG_TYPE = proxy.$system;

// 运行环境Tag样式
const environmentTheme = computed(() => {
    if ($system.RUNNING_ENVIRONMENT === 'dev') {
        return {
            type: 'success',
            content: 'development（开发环境）'
        }
    } else if ($system.RUNNING_ENVIRONMENT === 'test') {
        return {
            type: 'warning',
            content: 'testing（测试环境）'
        }
    } else {
        return {
            color: '#409eff',
            content: 'production（生产环境）'
        }
    }
})
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