<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useRouterStore } from './stores/router';
const router = useRouter();
const $routerStore = useRouterStore();
router.beforeEach((to) => {
  $routerStore.changeTabName(to.name as string);
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
