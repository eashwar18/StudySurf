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
    // Inside resolve: { }
alias: {
  // This tells Vite "@" is the folder './client'
  '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './client'),

  // This is the CRITICAL FIX: The missing '.' in the alias value
  '@/': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './client/'), 
  '@shared': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'shared')
}
  }
});