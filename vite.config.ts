import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import vitePluginPages from "vite-plugin-pages";
import vitePluginVueLayouts from "vite-plugin-vue-layouts";
import unpluginVueComponents from "unplugin-vue-components/vite";
import unpluginAutoImports from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginPages({
      dirs: "src/views",
    }),
    vitePluginVueLayouts(),
    unpluginVueComponents({
      resolvers: [ElementPlusResolver()],
    }),
    unpluginAutoImports({
      resolvers: [ElementPlusResolver()]
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    hmr: true,
    // 配置本地跨域代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        rewrite: path => path.replace(/^\/api/, ''),
        changeOrigin: true
      }
    }
  }
});
