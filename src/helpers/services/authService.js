import api, { setAuthToken } from './api';

export const authService = {
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },
  async register(credentials) {
    try {
      const response = await api.post('/auth/register', credentials);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Register failed');
    }
  },

  async fetch() {
    try {
      const response = await api.get('/auth/fetch');
      return response.data.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user');
    }
  },

  logout() {
    setAuthToken(null, null);
  }
};