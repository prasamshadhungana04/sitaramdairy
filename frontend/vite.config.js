// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Optional: Proxy API requests to avoid CORS issues entirely during dev
    // proxy: {
    //   '/api': 'http://localhost:8000',
    //   '/sanctum': 'http://localhost:8000',
    // }
  },
});