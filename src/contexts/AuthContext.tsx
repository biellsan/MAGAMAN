import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
  });

  useEffect(() => {
    // Check for stored auth token
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // TODO: Validate token with backend
          const user: User = { id: '1', email: 'user@example.com', name: 'John Doe', role: 'customer' };
          setState({ user, isAuthenticated: true, loading: false });
        } else {
          setState(prev => ({ ...prev, loading: false }));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      // TODO: Implement actual API call
      const user: User = { id: '1', email, name: 'John Doe', role: 'customer' };
      localStorage.setItem('auth_token', 'dummy_token');
      setState({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    setState({ user: null, isAuthenticated: false, loading: false });
  }, []);

  const register = useCallback(async (email: string, password: string, name: string) => {
    try {
      // TODO: Implement actual API call
      const user: User = { id: '1', email, name, role: 'customer' };
      localStorage.setItem('auth_token', 'dummy_token');
      setState({ user, isAuthenticated: true, loading: false });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};