import {useState} from 'react';
import {motion} from 'framer-motion';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaMicrosoft,
} from 'react-icons/fa';
import {useLogin} from '../api/react-query/mutation';
import {useDispatch} from 'react-redux';
import {setToken} from '../redux/slices/auth/authSlice';
import {encryptToken} from '../utils/encryption';
import validator from 'validator';
import {error, info, success} from '../utils/toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const {mutate, isPending} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validator.isEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (validator.isEmpty(password)) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    mutate(
      {email, password},
      {
        onSuccess: (data) => {
          if (data?.accessToken) {
            const encryptedToken = encryptToken(data.accessToken);
            dispatch(setToken(encryptedToken));

            success(
              `Welcome Back, ${data?.name}! 😊`,
              "We're thrilled to have you here. Enjoy your session!",
            );
          }
        },
        onError: (err) => {
          error(
            'Authentication Failed',
            err?.message || 'An unexpected error occurred. Please try again.',
          );
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="relative z-10 w-full max-w-md rounded-xl bg-gray-800 bg-opacity-50 p-8 shadow-2xl backdrop-blur-lg"
      >
        <div className="mb-8 text-center">
          <motion.h1
            initial={{scale: 0.9}}
            animate={{scale: 1}}
            className="mb-2 text-3xl font-bold text-white"
          >
            Welcome Back
          </motion.h1>
          <p className="text-gray-300">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-6 -translate-y-1/2 transform text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email && validator.isEmail(e.target.value)) {
                    setErrors((prev) => ({...prev, email: ''}));
                  }
                }}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 pl-10 pr-4 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Email address"
              />
              {errors.email && (
                <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <FaLock className="absolute left-3 top-6 -translate-y-1/2 transform text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password && e.target.value.length >= 1) {
                    setErrors((prev) => ({...prev, password: ''}));
                  }
                }}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 pl-10 pr-12 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-6 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  className="mt-1 text-sm text-red-400"
                >
                  {errors.password}
                </motion.p>
              )}
            </div>
          </div>

          <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="submit"
            disabled={isPending}
            className="w-full transform rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-blue-600 hover:shadow-lg disabled:opacity-50"
          >
            {isPending ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              </div>
            ) : (
              'Sign In'
            )}
          </motion.button>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-2 text-gray-400">Or continue with</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[FaGoogle, FaApple, FaMicrosoft].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                type="button"
                className="flex items-center justify-center rounded-lg bg-gray-700 bg-opacity-50 p-3 transition-all duration-300 hover:bg-opacity-70"
                onClick={() =>
                  info(
                    'Feature In Progress 😊',
                    "I'm working on this feature. Stay tuned!",
                  )
                }
              >
                <Icon className="text-xl text-gray-300" />
              </motion.button>
            ))}
          </div>

          <div className="mt-6 text-center">
            <motion.a
              whileHover={{scale: 1.05}}
              href="#"
              className="text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              Forgot your password?
            </motion.a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
