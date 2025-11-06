import { defineConfig } from 'vite'
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
      // This tells Vite "@" is the project root, which typically contains the components/
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './'), 

      '@shared': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'shared')
    }
  }
})