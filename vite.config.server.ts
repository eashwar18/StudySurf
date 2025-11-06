import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths' // <-- IMPORTANT

export default defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    tsconfigPaths() // <-- USE THE PLUGIN
  ],
  // No manual resolve.alias block here!
})