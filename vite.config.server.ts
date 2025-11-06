import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // We still need this

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite "@" is the folder './client'
      '@': path.resolve(__dirname, 'client'), 

      // This adds your @shared alias
      '@shared': path.resolve(__dirname, 'shared')
    }
  }
})