// frontend/src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  loginUser as apiLoginUser, 
  logoutUser as apiLogoutUser,
  registerUser as apiRegisterUser
} from '../services/auth';

// 1. Create Context
const AuthContext = createContext();

// 2. Custom Hook for easy access
export const useAuth = () => useContext(AuthContext);

// 3. Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- HYDRATION: Check for active session on page load ---
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('sitaRamUser');
      const token = localStorage.getItem('sitaRamToken');
      
      if (savedUser && token) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from local storage", error);
      localStorage.removeItem('sitaRamUser');
      localStorage.removeItem('sitaRamToken');
    } finally {
      setLoading(false);
    }
  }, []);

  // --- LOGIN LOGIC ---
  const login = async (email, password) => {
    try {
      // 1. EXCLUSIVE ADMIN OVERRIDE
      // Bypasses the database to guarantee the Admin can always log in
      if (email === 'adminsitaram@gmail.com' && password === 'adminPASSWORD@') {
        const adminUser = { 
          id: 999, 
          name: 'Super Admin', 
          role: 'admin', 
          email: email 
        };
        const adminToken = 'admin-secure-token-999';
        
        // Save to Local Storage
        localStorage.setItem('sitaRamUser', JSON.stringify(adminUser));
        localStorage.setItem('sitaRamToken', adminToken);
        
        // Instantly Update Global State
        setUser(adminUser);
        return { success: true, role: 'admin' };
      }

      // 2. STANDARD CUSTOMER LOGIN
      // Talks to backend/api/auth/login.php
      const data = await apiLoginUser({ email, password });
      
      if (data && data.success && data.user) {
        // Save to Local Storage
        localStorage.setItem('sitaRamUser', JSON.stringify(data.user));
        if (data.token) {
          localStorage.setItem('sitaRamToken', data.token);
        }
        
        // Instantly Update Global State
        setUser(data.user);
        return { success: true, role: data.user.role };
      }
      
      return { 
        success: false, 
        error: data?.error || 'Invalid email or password' 
      };
      
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed. Please check your credentials.' 
      };
    }
  };

  // --- REGISTRATION LOGIC ---
  const register = async (userData) => {
    try {
      const response = await apiRegisterUser(userData);
      return response;
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Registration failed. Please try again.' 
      };
    }
  };

  // --- LOGOUT LOGIC ---
  const logout = async () => {
    try {
      // Attempt to invalidate session on backend if API supports it
      await apiLogoutUser();
    } catch (e) {
      console.warn("Backend logout failed, forcing local logout.");
    } finally {
      // 1. Wipe Global State
      setUser(null);
      
      // 2. Wipe Local Storage Tokens
      localStorage.removeItem('sitaRamUser');
      localStorage.removeItem('sitaRamToken');
      
      // 3. Clear Cart Data (Ensures the next user starts with 0 items)
      localStorage.removeItem('sitaRamCart');
      localStorage.removeItem('cartItems');
    }
  };

  // --- RENDER ---
  // Provide state and actions to the rest of the application
  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      register, 
      loading, 
      isAuthenticated: !!user 
    }}>
      {/* Wait for local storage hydration before rendering children */}
      {!loading && children}
    </AuthContext.Provider>
  );
};