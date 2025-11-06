import { defineConfig } in 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'client'),
      '@shared': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'shared')
    }
  }
})