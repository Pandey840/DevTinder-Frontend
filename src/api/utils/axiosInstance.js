import axios from 'axios';
import {getToken, setToken, clearToken} from './authService'; // Token handling utility
import {refreshTokenApi} from './apiService'; // API to refresh token

const axiosInstance = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Your API URL
  timeout: 10000, // Request timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling 401 (Unauthorized) and token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {response} = error;
    const originalRequest = response.config;

    // Handle token expiration
    if (response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue requests while refreshing the token
        return new Promise((resolve, reject) => {
          failedQueue.push({resolve, reject});
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const {data} = await refreshTokenApi(); // Refresh token API call
        setToken(data.accessToken); // Save the new token
        axiosInstance.defaults.headers['Authorization'] =
          `Bearer ${data.accessToken}`;
        processQueue(null, data.accessToken);
        return axiosInstance(originalRequest); // Retry original request
      } catch (err) {
        processQueue(err, null);
        clearToken(); // Clear token if refresh fails
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
