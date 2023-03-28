import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/base.css";

// vite-plugin-pages
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
// vite-plugin-vue-layouts
import { setupLayouts } from "virtual:generated-layouts";
import systemConfig from "./system.config";
// axios
import $api from './api/index'
// element-plus/icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// xlsx
import $xlsx from './utils/xlsx'

export const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(),
});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.provide('global', {
  $api,
  $xlsx
})

app.use(router);
app.use(ElementPlus);
app.use(createPinia());
app.config.globalProperties.$system = systemConfig;

app.mount("#app");
