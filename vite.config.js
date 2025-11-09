// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react({
    jsxRuntime: 'automatic' // ← React 19 usa esto
  })],
  build: {
    outDir: 'dist'
  }
})