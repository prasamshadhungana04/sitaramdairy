// frontend/src/services/auth.js
import api from './api';

export const loginUser = async (credentials) => {
  // Points to backend/api/auth/login.php via Vite proxy
  const response = await api.post('/auth/login.php', credentials);
  return response.data;
};

export const registerUser = async (data) => {
  // Points to backend/api/auth/register.php
  const response = await api.post('/auth/register.php', data);
  return response.data;
};

export const logoutUser = async () => {
  // For JWT/Token-based Pure PHP, clearing the frontend is usually enough,
  // but you can add a backend invalidation endpoint later if needed.
  return { success: true, message: "Logged out successfully" };
};