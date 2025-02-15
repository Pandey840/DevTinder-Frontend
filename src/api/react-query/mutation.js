import {useMutation} from '@tanstack/react-query';
import {login} from '../apis';

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export {useLogin};

