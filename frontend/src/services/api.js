// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  // Point to the PHP API directory
  baseURL: 'http://localhost/backend/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Essential for cross-origin requests with sessions/cookies
  withCredentials: true,
});

// Request interceptor: Attach JWT or Auth token if you decide to use one later
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sitaRamToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Logic for PHP: If the request is a FormData (like product uploads), 
  // let the browser set the Content-Type automatically.
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
      // Logic for session expiration or unauthorized access
      console.warn("Unauthorized access. Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default api;