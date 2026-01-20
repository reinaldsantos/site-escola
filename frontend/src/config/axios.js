import axios from 'axios';

// ConfiguraÃ§Ã£o do axios com baseURL baseado no ambiente
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://strapi-final-funcional.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar token nas requisiÃ§Ãµes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;


