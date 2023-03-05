<template>
    <div>
        <el-tabs type="border-card" class="router-view ">
            <el-tab-pane :label="label">
                <RouterView></RouterView>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { useRouterStore } from '@/stores/router';
import { computed } from 'vue';

const $routerStore = useRouterStore();
const label = computed(() => {
    return $routerStore.tabName;
})
</script>

<style scoped>
.router-view {
    width: 100%;
    height: calc(100vh - 72px);
}
</style>