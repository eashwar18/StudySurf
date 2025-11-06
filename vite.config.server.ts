import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // We still need path

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite "a" is the folder './client'
      // and "@shared" is the folder './shared'
      'a': path.resolve(__dirname, 'client'), 
      '@shared': path.resolve(__dirname, 'shared')
    }
  }
})