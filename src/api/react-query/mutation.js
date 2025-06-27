import {useMutation} from '@tanstack/react-query';
import * as api from '../apis';

export const useLogin = () => {
  return useMutation({
    mutationFn: api.login,
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: api.signup,
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: api.verifyOtp,
  });
};

export const useProfileUpdate = () => {
  return useMutation({
    mutationFn: api.profileUpdate,
  });
};
