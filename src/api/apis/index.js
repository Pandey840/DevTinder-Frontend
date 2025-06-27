import apiCall from '../utils/apiCall';
import API_ENDPOINTS from '../endpoints';

export const login = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.LOGIN, payload);
};

export const signup = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.SIGN_UP, payload);
};

export const verifyOtp = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.VERIFY_OTP, payload);
};

export const profileDetails = async () => {
  return await apiCall('get', API_ENDPOINTS.PROFILE_DETAILS);
};

export const profileUpdate = async (payload) => {
  return await apiCall('put', API_ENDPOINTS.PROFILE_UPDATE, payload);
};

// const patientDetails = async (patient_id) => {
//   return await apiCall('get', API_ENDPOINTS.LOGIN, null, {
//     patient_id,
//   });
// };
