import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://82.112.234.104:8001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
