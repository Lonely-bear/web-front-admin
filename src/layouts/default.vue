<script setup lang="ts">
import CardContainer from './components/CardContainer.vue';
import HeaderContainer from './components/Header.vue'
import AsideMenu from './components/AsideMenu.vue';
import Tabs from './components/Tabs.vue';
</script>

<template>
    <el-container class="container">
        <el-header class="top">
            <CardContainer>
                <HeaderContainer />
            </CardContainer>
        </el-header>
        <el-container style="min-width: 1200px;">
            <el-aside width="fit-content" class="aside">
                <CardContainer>
                    <AsideMenu />
                </CardContainer>
            </el-aside>
            <el-main class="main">
                <CardContainer class="router-view">
                    <Tabs></Tabs>
                </CardContainer>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.container {
    width: 100%;
}

.top {
    padding-top: 20px;
    height: fit-content;
    min-width: 1200px;
    box-sizing: border-box;
}

.aside {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-right: 0;
    max-height: calc(100vh - 72px);
    height: calc(100vh - 72px);
    box-sizing: border-box;
}

.main {
    min-width: 50vw;
    height: calc(100vh - 72px);
    box-sizing: border-box;
}
/* .router-view {
    padding: 1em;
} */
</style>