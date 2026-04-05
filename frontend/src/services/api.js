// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  // Using the Vite Proxy setup to route directly to XAMPP without CORS issues
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor: Attach Auth token and handle FormData dynamically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sitaRamToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Logic for Pure PHP: If uploading an image, let browser set multipart/form-data
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor: Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Session expired. Redirecting to login...");
      localStorage.removeItem('sitaRamUser');
      localStorage.removeItem('sitaRamToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;