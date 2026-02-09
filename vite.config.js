// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: "https://url-shortening-web-app-two.vercel.app",
    cors: "https://url-shortening-web-app-two.vercel.app",
    proxy: {
      '/api': {
        target: 'https://cleanuri.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
