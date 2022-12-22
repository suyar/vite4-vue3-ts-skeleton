import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
      scss: {
        // additionalData: `@import "@/styles/var.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['ep'],
        }),
      ],
      dts: resolve('src/dts/auto-imports.d.ts'),
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'ts'],
      deep: true,
      dts: resolve('src/dts/components.d.ts'),
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      // autoInstall: true,
    }),
  ],
})
