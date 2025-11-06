import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath, URL } from 'url'; // <-- STANDARD ES MODULE IMPORTS

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This must match your tsconfig.json and points to the project root
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './'),
      '@shared': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'shared')
    }
  }
});