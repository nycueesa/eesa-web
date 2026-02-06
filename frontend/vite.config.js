import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      // 啟用 polling 模式來解決 WSL/Docker 檔案監控問題
      usePolling: true,
      interval: 1000,
      // 忽略 node_modules 來提升效能
      ignored: ['**/node_modules/**']
    },
    // 使用預設 HMR 設定以避免 ws 指向 0.0.0.0
  }
})
