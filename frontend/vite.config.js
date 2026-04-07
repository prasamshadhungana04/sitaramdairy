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
        // FIXED: Pointing exactly to your XAMPP folder
        target: 'http://localhost/sita-ram-dairy/backend', 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      // Proxies dynamic image uploads to XAMPP
      '/uploads': {
        // FIXED: Pointing exactly to your XAMPP folder
        target: 'http://localhost/sita-ram-dairy/backend',
        changeOrigin: true,
      }
    },
  },
});