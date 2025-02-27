import apiCall from '../utils/apiCall';
import API_ENDPOINTS from '../endpoints';

const login = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.LOGIN, payload);
};

const signup = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.SIGN_UP, payload);
};

const verifyOtp = async (payload) => {
  return await apiCall('post', API_ENDPOINTS.VERIFY_OTP, payload);
};

// const patientDetails = async (patient_id) => {
//   return await apiCall('get', API_ENDPOINTS.LOGIN, null, {
//     patient_id,
//   });
// };

export {login, signup, verifyOtp};
