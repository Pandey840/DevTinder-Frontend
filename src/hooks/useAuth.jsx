import {useSelector} from 'react-redux';

const useAuth = () => {
  const token = useSelector((state) => state.auth.token);
  return Boolean(token);
};

export default useAuth;
