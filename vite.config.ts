import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: false,
        modifyVars: {
          // hack: `true; @import '@less/config.less'`,
        },
      },
    },
  },
  plugins: [vue()],
});
