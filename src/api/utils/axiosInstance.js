import axios from 'axios';
import {decryptToken, encryptToken} from '../../utils/encryption';
import store from '../../redux/store/store';
import {setToken, clearToken} from '../../redux/slices/auth/authSlice';
import API_ENDPOINTS from '../endpoints';

const baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_LOCAL_BACKEND_URL
    : import.meta.env.VITE_PROD_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const refreshTokenApi = async () => {
  try {
    const response = await axios.get(
      `${baseURL}${API_ENDPOINTS.REFRESH_TOKEN}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Refresh token failed:', error);
    throw error;
  }
};

// Request interceptor for adding token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const encryptedToken = store.getState().auth.token;
    if (encryptedToken) {
      const token = decryptToken(encryptedToken);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
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
        const {data} = await refreshTokenApi();
        const encryptedToken = encryptToken(data?.accessToken);
        store.dispatch(setToken(encryptedToken));
        axiosInstance.defaults.headers['Authorization'] =
          `Bearer ${data.accessToken}`;
        processQueue(null, data.accessToken);
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(clearToken());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
