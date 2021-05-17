import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

import path from 'path'

const baseUrl = {
  development: './',
  release: './',
}
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      vitePluginImp({
        libList: [
          {
            libName: 'ant-design-vue',
            style(name) {
              return `ant-design-vue/es/${name}/style/index.css`
            },
          },
        ],
      }),
    ],
    base: baseUrl[mode],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://backend-api-02.newbee.ltd/manage-api/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}
