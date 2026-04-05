// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Point to your Laravel backend
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Required for Laravel Sanctum CSRF cookies
});

// Request interceptor to add the auth token to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sitaRamToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;