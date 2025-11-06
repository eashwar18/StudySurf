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
      // This one fixes your build error
      'a': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'client'),

      // This one matches the @shared from your tsconfig
      '@shared': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'shared')
    }
  }
})