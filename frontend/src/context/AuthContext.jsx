// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser as apiLoginUser, logoutUser as apiLogoutUser } from '../services/auth';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sitaRamUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const data = await apiLoginUser({ email, password });
      
      if (data.user) {
        setUser(data.user);
        localStorage.setItem('sitaRamUser', JSON.stringify(data.user));
        if (data.token) localStorage.setItem('sitaRamToken', data.token);
        return { success: true, role: data.user.role };
      }
      return { success: false, error: 'Invalid response from server' };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed. Please check your credentials.' 
      };
    }
  };

  const logout = async () => {
    try {
      await apiLogoutUser();
    } catch (e) {
      console.error("Logout API failed, clearing local state anyway");
    } finally {
      setUser(null);
      localStorage.removeItem('sitaRamUser');
      localStorage.removeItem('sitaRamToken');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};