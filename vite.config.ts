import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/Al_Asma_Ul_Husna_WEB/',
  build: {
    outDir: 'dist',
  },
})