import {useLogin} from '../api/react-query/mutation';
import {encryptToken} from '../utils/encryption';
import {setToken} from '../redux/slices/auth/authSlice';
import {useDispatch} from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();
  const {mutate} = useLogin();

  const handleSubmit = () => {
    const payload = {
      email: 'pandeydhiraj913@gmail.com',
      password: 'Dhiraj@123',
    };
    mutate(payload, {
      onSuccess: (data) => {
        if (data?.accessToken) {
          const encryptedToken = encryptToken(data.accessToken);
          dispatch(setToken(encryptedToken));
        }
      },
      onError: (error) => {
        console.error('Login failed:', error);
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSubmit}
        className="rounded-2xl bg-black px-6 py-3 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Test;
