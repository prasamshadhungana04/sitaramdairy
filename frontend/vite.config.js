// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxies frontend API calls to your XAMPP backend
      '/api': {
        target: 'http://localhost/backend', 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      // Proxies dynamic image uploads to XAMPP
      '/uploads': {
        target: 'http://localhost/backend',
        changeOrigin: true,
      }
    },
  },
});