import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // ← CLAVE para Netlify
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Opcional: optimizaciones para versiones recientes
    minify: 'esbuild',
    target: 'esnext'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})