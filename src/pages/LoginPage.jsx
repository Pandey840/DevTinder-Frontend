import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaMicrosoft,
} from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  useEffect(() => {
    calculatePasswordStrength(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
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
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 pl-10 pr-4 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 pl-10 pr-12 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-gray-700">
              <div
                className={`h-full transition-all duration-300 ${
                  passwordStrength === 0
                    ? 'w-0'
                    : passwordStrength === 1
                      ? 'w-1/4 bg-red-500'
                      : passwordStrength === 2
                        ? 'w-2/4 bg-yellow-500'
                        : passwordStrength === 3
                          ? 'w-3/4 bg-blue-500'
                          : 'w-full bg-green-500'
                }`}
              />
            </div>
          </div>

          <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="submit"
            disabled={isLoading}
            className="w-full transform rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-blue-600 hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              </div>
            ) : (
              'Sign In'
            )}
          </motion.button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-800 bg-opacity-50 px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[FaGoogle, FaApple, FaMicrosoft].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                type="button"
                className="flex items-center justify-center rounded-lg bg-gray-700 bg-opacity-50 p-3 transition-all duration-300 hover:bg-opacity-70"
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
