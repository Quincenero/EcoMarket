
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // ← Esto es ESENCIAL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Organiza CSS, JS, imágenes
    emptyOutDir: true
  },
  publicDir: 'public'
})