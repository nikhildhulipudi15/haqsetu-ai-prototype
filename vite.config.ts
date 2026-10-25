import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative asset paths let the app run from a GitHub Pages project subpath.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
