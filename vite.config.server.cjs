const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react-swc');
const path = require('path');

// This file is now a .cjs module, so __dirname is guaranteed to be available.
module.exports = defineConfig({
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This will now work
      '@': path.resolve(__dirname, 'client'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  }
});