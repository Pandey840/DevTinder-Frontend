import {useMutation} from '@tanstack/react-query';
import {login, signup, verifyOtp} from '../apis';

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

export {useLogin, useSignup, useVerifyOtp};
