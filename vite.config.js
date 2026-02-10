import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // viteCompression({
    //   threshold: 10240, // 超过 10kb 的文件才压缩
    //   algorithm: 'gzip',
    //   ext: '.gz'
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 vue 相关库打包在一起
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 其他第三方库（如以后引入的 axios 或 echarts）
          // 'utils-vendor': ['axios'],
        }
      }
    }
  }
})
