import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths' // <-- IMPORT THE PLUGIN

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    tsconfigPaths() // <-- ADD THE PLUGIN HERE
  ],
  // No manual 'resolve.alias' block needed
})