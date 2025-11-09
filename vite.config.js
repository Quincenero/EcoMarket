import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EcoMarket/',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    // Para desarrollo local
    host: true,
    port: 3000
  }
})