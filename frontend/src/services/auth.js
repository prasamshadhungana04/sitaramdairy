// src/services/auth.js
import api from './api';
import axios from 'axios';

// Required step for Laravel Sanctum before logging in
export const getCsrfCookie = () => {
  return axios.get('http://localhost:8000/sanctum/csrf-cookie', {
    withCredentials: true
  });
};

export const loginUser = async (credentials) => {
  await getCsrfCookie();
  const response = await api.post('/login', credentials);
  return response.data;
};

export const registerUser = async (data) => {
  await getCsrfCookie();
  const response = await api.post('/register', data);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/logout');
  return response.data;
};