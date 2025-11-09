import { defineConfig } from 'vite'
// Si usas React, descomenta:
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // ¡IMPORTANTE para GitHub Pages y Netlify!
  plugins: [react()],  // Descomenta si usas React
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})