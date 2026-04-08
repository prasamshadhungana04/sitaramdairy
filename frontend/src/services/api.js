import axios from 'axios';

// Dynamically set the API URL
// On Vercel: Uses your VITE_API_BASE_URL (InfinityFree URL)
// On Local: Falls back to '/api' for your Vite Proxy
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // withCredentials must be true if you use PHP sessions, 
  // but note that InfinityFree often blocks cross-site cookies.
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
    const originalRequest = error.config;
    
    // Redirect only if it's a 401 (Unauthorized) AND we are NOT on the login page
    if (error.response?.status === 401 && !originalRequest.url.includes('login.php')) {
      console.warn("Session expired. Redirecting to login...");
      localStorage.removeItem('sitaRamUser');
      localStorage.removeItem('sitaRamToken');
      
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;