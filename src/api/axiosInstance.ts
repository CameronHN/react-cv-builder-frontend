import axios from 'axios';

const axiosInstance = axios.create({
  // Base URL backend API
  baseURL: 'https://localhost:44366/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
