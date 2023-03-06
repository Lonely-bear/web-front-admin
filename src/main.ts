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

export const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.config.globalProperties.$system = systemConfig;

app.mount("#app");
