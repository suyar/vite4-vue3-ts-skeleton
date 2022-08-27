import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

const resolve = (dir: string): string => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
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
  plugins: [
    vue(),
    AutoImport({
      resolvers: [AntDesignVueResolver()],
      dts: false,
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'ts'],
      deep: true,
      dts: false,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
})
