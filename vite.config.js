import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

import legacyPlugin from '@vitejs/plugin-legacy'
import requireTransform from 'vite-plugin-require-transform'
import commonjs from '@rollup/plugin-commonjs';//引入commojs

export default ({ mode }) => {
  const { VITE_APP_API_PREFIX, VITE_APP_API_BASE_URL, VITE_APP_API_MENU_URL } = loadEnv(mode, process.cwd())
  const timestamp = new Date().getTime()
  return defineConfig({
    plugins: [
      commonjs(),
      react(),
      legacyPlugin({
        targets: ['chrome 52'],  // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
      }),
      requireTransform({
        fileRegex: /.jsx$|.js$/
      })
    ],
    build:{
      rollupOptions: {
        output: {
          // 入口文件名
          entryFileNames: `assets/[name].${timestamp}.js`,
          // 块文件名
          chunkFileNames: `assets/[name]-[hash].${timestamp}.js`,
          // 资源文件名 css 图片等等
          assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
          // 分包策略
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      host: '0.0.0.0',//ip地址
      port: 888, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      proxy: {
        '/api': {
          target: VITE_APP_API_BASE_URL, // 目标地址 --> 服务器地址
          changeOrigin: true, // 允许跨域
          ws: true,  // 允许websocket代理
          rewrite: (path) => path.replace(/^\/api/, "")
        },

      },
    }
  })
}
