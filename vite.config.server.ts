import { fileURLToPath, URL } from 'url';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig(({ mode }) => ({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      'a': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'client')
    },
  },
}));