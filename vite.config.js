import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Para Vercel
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  build: {
    outDir: 'dist',
    sourcemap: false,  // Opcional: acelera el build
    emptyOutDir: true  // Limpia la carpeta dist antes de build
  }
})