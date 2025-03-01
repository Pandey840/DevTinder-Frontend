import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_LIGHT_CAST_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_LIGHT_CAST_CLIENT_SECRET;
const SCOPE = import.meta.env.VITE_LIGHT_CAST_SCOPE;
const TOKEN_URL = import.meta.env.VITE_LIGHT_CAST_TOKEN_URL;
const SKILLS_API_URL = import.meta.env.VITE_LIGHT_CAST_SKILLS_API_URL;

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: SKILLS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch a new token
const fetchToken = async () => {
  try {
    const formData = new URLSearchParams();
    formData.append('client_id', CLIENT_ID);
    formData.append('client_secret', CLIENT_SECRET);
    formData.append('grant_type', 'client_credentials');
    formData.append('scope', SCOPE);

    const response = await axios.post(TOKEN_URL, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const newToken = response.data.access_token;
    localStorage.setItem('lightcast_token', newToken);
    return newToken;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
};

// Axios interceptor to refresh token if a 401 error occurs
axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('lightcast_token');

    if (!token) {
      token = await fetchToken();
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const newToken = await fetchToken();
      if (newToken) {
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(error.config); // Retry failed request
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
