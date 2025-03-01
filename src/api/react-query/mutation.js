import {useMutation} from '@tanstack/react-query';
import {login, profileUpdate, signup, verifyOtp} from '../apis';

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};

const useProfileUpdate = () => {
  return useMutation({
    mutationFn: profileUpdate,
  });
};

export {useLogin, useSignup, useVerifyOtp, useProfileUpdate};
