// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for session
    const savedUser = localStorage.getItem('sitaRamUser');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulated API call - Replace with actual auth.js service
    if (email === 'admin@sitaram.com' && password === 'password123') {
      const mockAdmin = { id: 1, name: 'Admin User', email, role: 'admin' };
      setUser(mockAdmin);
      localStorage.setItem('sitaRamUser', JSON.stringify(mockAdmin));
      return { success: true };
    }
    if (email === 'customer@test.com' && password === 'password123') {
      const mockCustomer = { id: 2, name: 'Customer User', email, role: 'customer' };
      setUser(mockCustomer);
      localStorage.setItem('sitaRamUser', JSON.stringify(mockCustomer));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sitaRamUser');
    localStorage.removeItem('sitaRamToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};