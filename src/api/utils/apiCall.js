import axiosInstance from './axiosInstance';

const apiCall = async (method, url, data = null, params = null) => {
  try {
    const response = await axiosInstance({method, url, data, params});
    return response.data;
  } catch (error) {
    return Promise.reject(
      error.response || {
          message: 'No response from server. Check your network.',
        } || {message: `Unexpected error: ${error.message}`},
    );
  }
};

export default apiCall;
