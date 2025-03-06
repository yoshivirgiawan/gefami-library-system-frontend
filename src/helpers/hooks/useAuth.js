import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { setAuthToken } from '../services/api';

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const data = await authService.login(credentials);
      setAuthToken(data.access_token, {});
      const user = await authService.fetch();
      setAuthToken(data.access_token, JSON.stringify({
        name: user.name,
        email: user.email,
        role: user.role,
      }));
      if(user.role === 'admin') {
        navigate('/admin/books');
      } else {
        navigate('/');
      }
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const data = await authService.register(credentials);
      setAuthToken(data.token, {
        name: data.name,
        email: data.email,
        role: data.role,
      });
      navigate('/');
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    navigate('/');
  };

  return { login, register, logout, loading, error };
};