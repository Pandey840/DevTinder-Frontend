import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {FcGoogle} from 'react-icons/fc';
import {AiFillApple, AiFillWindows} from 'react-icons/ai';
import {FaEnvelope, FaEye, FaEyeSlash, FaLock} from 'react-icons/fa';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [verificationMode, setVerificationMode] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md rounded-xl bg-gray-800 bg-opacity-50 p-8 shadow-2xl backdrop-blur-lg"
      >
        {!verificationMode ? (
          <>
            <motion.h2
              variants={itemVariants}
              className="mb-8 text-center text-3xl font-bold text-[#E0E0E0]"
            >
              Create Account
            </motion.h2>
            <form className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <input
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 px-4 py-3 text-white transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-[#4DABF7]"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 px-4 py-3 text-white transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-[#4DABF7]"
                    placeholder="Last Name"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <select className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 px-4 py-3 text-gray-400 transition-all focus:outline-none focus:ring-1 focus:ring-[#4DABF7]">
                  <option value="" className="bg-gray-700 text-white">
                    Select Gender
                  </option>
                  <option value="male" className="bg-gray-700 text-white">
                    Male
                  </option>
                  <option value="female" className="bg-gray-700 text-white">
                    Female
                  </option>
                  <option value="other" className="bg-gray-700 text-white">
                    Other
                  </option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-6 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 pl-10 pr-4 text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Email address"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
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
              </motion.div>

              <motion.button
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                type="submit"
                variants={itemVariants}
                className="w-full transform rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-blue-600 hover:shadow-lg disabled:opacity-50"
              >
                {false ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  </div>
                ) : (
                  'Sign Up'
                )}
              </motion.button>
            </form>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col space-y-4"
            >
              <div className="flex items-center">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="px-4 text-[#E0E0E0]">or continue with</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>

              <div className="flex space-x-4">
                <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
                  <FcGoogle size={20} />
                  <span>Google</span>
                </button>
                <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
                  <AiFillApple size={20} />
                  <span>Apple</span>
                </button>
                <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
                  <AiFillWindows size={20} />
                  <span>Microsoft</span>
                </button>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-8 text-center text-3xl font-bold text-[#E0E0E0]"
            >
              Verify Your Email
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4"
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="h-12 w-12 rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 text-center text-[#E0E0E0] transition-all focus:outline-none focus:ring-1 focus:ring-[#4DABF7]"
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <p className="mb-4 text-[#E0E0E0]">
                Didn't receive code? {timer > 0 ? `Resend in ${timer}s` : ''}
              </p>
              <button
                disabled={timer > 0}
                className="font-semibold text-[#4DABF7] disabled:opacity-50"
                onClick={() => setTimer(30)}
              >
                Resend Code
              </button>
            </motion.div>

            <motion.button
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              variants={itemVariants}
              className="w-full transform rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-blue-600 hover:shadow-lg disabled:opacity-50"
            >
              Verify
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SignUpPage;
