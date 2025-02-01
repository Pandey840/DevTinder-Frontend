// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (/[A-Z]/.test(password)) strength += 1;
//     if (/[0-9]/.test(password)) strength += 1;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 1;
//     setPasswordStrength(strength);
//   };

//   useEffect(() => {
//     calculatePasswordStrength(password);
//   }, [password]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!validateEmail(email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
//     if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       console.log("Login successful");
//     } catch (error) {
//       console.error("Login failed:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5"></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl p-8 relative z-10"
//       >
//         <div className="text-center mb-8">
//           <motion.h1
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             className="text-3xl font-bold text-white mb-2"
//           >
//             Welcome Back
//           </motion.h1>
//           <p className="text-gray-300">Sign in to continue</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg pl-10 pr-4 py-3 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
//                 placeholder="Email address"
//               />
//               {errors.email && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-400 text-sm mt-1"
//                 >
//                   {errors.email}
//                 </motion.p>
//               )}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="relative">
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg pl-10 pr-12 py-3 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//             <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
//               <div
//                 className={`h-full transition-all duration-300 ${passwordStrength === 0 ? "w-0" :
//                   passwordStrength === 1 ? "w-1/4 bg-red-500" :
//                     passwordStrength === 2 ? "w-2/4 bg-yellow-500" :
//                       passwordStrength === 3 ? "w-3/4 bg-blue-500" :
//                         "w-full bg-green-500"}`}
//               />
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg py-3 font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-50"
//           >
//             {isLoading ? (
//               <div className="flex items-center justify-center">
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//               </div>
//             ) : (
//               "Sign In"
//             )}
//           </motion.button>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-600"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 text-gray-400 bg-gray-800 bg-opacity-50">Or continue with</span>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4">
//             {[FaGoogle, FaApple, FaMicrosoft].map((Icon, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="button"
//                 className="flex items-center justify-center p-3 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
//               >
//                 <Icon className="text-gray-300 text-xl" />
//               </motion.button>
//             ))}
//           </div>

//           <div className="text-center mt-6">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="#"
//               className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
//             >
//               Forgot your password?
//             </motion.a>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;

// import {useState} from 'react';
// import {motion} from 'framer-motion';
// import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import {FiMail, FiLock, FiEye, FiEyeOff} from 'react-icons/fi';
// import {FcGoogle} from 'react-icons/fc';
// import {AiFillApple, AiFillWindows} from 'react-icons/ai';

// const schema = yup.object().shape({
//   firstName: yup.string().required('First name is required'),
//   lastName: yup.string().required('Last name is required'),
//   gender: yup.string().required('Gender is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
// });

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [verificationMode, setVerificationMode] = useState(false);
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(30);

//   const {
//     register,
//     handleSubmit,
//     formState: {errors},
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     setVerificationMode(true);
//   };

//   const handleOtpChange = (element, index) => {
//     if (isNaN(element.value)) return false;

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   const containerVariants = {
//     hidden: {opacity: 0, y: 20},
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {opacity: 0, y: 20},
//     visible: {opacity: 1, y: 0},
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#1A1A1A] p-4">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full max-w-md rounded-xl bg-[#2C2C2C] bg-opacity-80 p-8 shadow-2xl backdrop-blur-lg"
//       >
//         {!verificationMode ? (
//           <>
//             <motion.h2
//               variants={itemVariants}
//               className="mb-8 text-center text-3xl font-bold text-[#E0E0E0]"
//             >
//               Create Account
//             </motion.h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <motion.div
//                 variants={itemVariants}
//                 className="grid grid-cols-2 gap-4"
//               >
//                 <div className="relative">
//                   <input
//                     {...register('firstName')}
//                     className="w-full rounded-lg bg-[#1A1A1A] px-4 py-3 text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                     placeholder="First Name"
//                   />
//                   {errors.firstName && (
//                     <span className="text-sm text-red-500">
//                       {errors.firstName.message}
//                     </span>
//                   )}
//                 </div>
//                 <div className="relative">
//                   <input
//                     {...register('lastName')}
//                     className="w-full rounded-lg bg-[#1A1A1A] px-4 py-3 text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                     placeholder="Last Name"
//                   />
//                   {errors.lastName && (
//                     <span className="text-sm text-red-500">
//                       {errors.lastName.message}
//                     </span>
//                   )}
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <select
//                   {...register('gender')}
//                   className="w-full rounded-lg bg-[#1A1A1A] px-4 py-3 text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.gender && (
//                   <span className="text-sm text-red-500">
//                     {errors.gender.message}
//                   </span>
//                 )}
//               </motion.div>

//               <motion.div variants={itemVariants} className="relative">
//                 <div className="relative">
//                   <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#E0E0E0]" />
//                   <input
//                     {...register('email')}
//                     className="w-full rounded-lg bg-[#1A1A1A] py-3 pl-10 pr-4 text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                     placeholder="Email"
//                   />
//                 </div>
//                 {errors.email && (
//                   <span className="text-sm text-red-500">
//                     {errors.email.message}
//                   </span>
//                 )}
//               </motion.div>

//               <motion.div variants={itemVariants} className="relative">
//                 <div className="relative">
//                   <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#E0E0E0]" />
//                   <input
//                     {...register('password')}
//                     type={showPassword ? 'text' : 'password'}
//                     className="w-full rounded-lg bg-[#1A1A1A] py-3 pl-10 pr-12 text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                     placeholder="Password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 transform text-[#E0E0E0]"
//                   >
//                     {showPassword ? <FiEyeOff /> : <FiEye />}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <span className="text-sm text-red-500">
//                     {errors.password.message}
//                   </span>
//                 )}
//               </motion.div>

//               <motion.button
//                 variants={itemVariants}
//                 type="submit"
//                 className="w-full transform rounded-lg bg-gradient-to-r from-[#4DABF7] to-[#4D7CF7] py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50"
//               >
//                 Sign Up
//               </motion.button>
//             </form>

//             <motion.div
//               variants={itemVariants}
//               className="mt-8 flex flex-col space-y-4"
//             >
//               <div className="flex items-center">
//                 <div className="flex-1 border-t border-gray-600"></div>
//                 <span className="px-4 text-[#E0E0E0]">or continue with</span>
//                 <div className="flex-1 border-t border-gray-600"></div>
//               </div>

//               <div className="flex space-x-4">
//                 <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-[#1A1A1A] py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
//                   <FcGoogle size={20} />
//                   <span>Google</span>
//                 </button>
//                 <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-[#1A1A1A] py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
//                   <AiFillApple size={20} />
//                   <span>Apple</span>
//                 </button>
//                 <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-[#1A1A1A] py-3 text-[#E0E0E0] transition-all hover:bg-opacity-80">
//                   <AiFillWindows size={20} />
//                   <span>Microsoft</span>
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-6"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="mb-8 text-center text-3xl font-bold text-[#E0E0E0]"
//             >
//               Verify Your Email
//             </motion.h2>

//             <motion.div
//               variants={itemVariants}
//               className="flex justify-center space-x-4"
//             >
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                   className="h-12 w-12 rounded-lg bg-[#1A1A1A] text-center text-[#E0E0E0] transition-all focus:outline-none focus:ring-2 focus:ring-[#4DABF7]"
//                 />
//               ))}
//             </motion.div>

//             <motion.div variants={itemVariants} className="text-center">
//               <p className="mb-4 text-[#E0E0E0]">
//                 Didn't receive code? {timer > 0 ? `Resend in ${timer}s` : ''}
//               </p>
//               <button
//                 disabled={timer > 0}
//                 className="font-semibold text-[#4DABF7] disabled:opacity-50"
//                 onClick={() => setTimer(30)}
//               >
//                 Resend Code
//               </button>
//             </motion.div>

//             <motion.button
//               variants={itemVariants}
//               className="w-full transform rounded-lg bg-gradient-to-r from-[#4DABF7] to-[#4D7CF7] py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
//             >
//               Verify
//             </motion.button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default SignUpPage;

// import {useState, useCallback} from 'react';
// import {motion} from 'framer-motion';
// import {useDropzone} from 'react-dropzone';
// import Select from 'react-select';
// import {useForm} from 'react-hook-form';
// import {FiUpload, FiSave, FiRefreshCw} from 'react-icons/fi';

// const ProfileSetup = () => {
//   const [profileData, setProfileData] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     gender: 'Male',
//     age: '',
//     about: '',
//     skills: [],
//     photo:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200',
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();

//   const skillOptions = [
//     {value: 'react', label: 'React'},
//     {value: 'javascript', label: 'JavaScript'},
//     {value: 'typescript', label: 'TypeScript'},
//     {value: 'node', label: 'Node.js'},
//     {value: 'python', label: 'Python'},
//   ];

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setProfileData((prev) => ({...prev, photo: reader.result}));
//     };
//     reader.readAsDataURL(file);
//   }, []);

//   const {getRootProps, getInputProps} = useDropzone({
//     onDrop,
//     accept: {'image/*': []},
//     maxFiles: 1,
//   });

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setProfileData((prev) => ({...prev, [name]: value}));
//   };

//   const handleSkillsChange = (selectedOptions) => {
//     setProfileData((prev) => ({...prev, skills: selectedOptions}));
//   };

//   const onSubmit = (data) => {
//     console.log('Form submitted:', {...profileData, ...data});
//   };

//   const handleReset = () => {
//     setProfileData({
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john.doe@example.com',
//       gender: 'Male',
//       age: '',
//       about: '',
//       skills: [],
//       photo:
//         'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 text-white md:p-8">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
//         {/* Form Section */}
//         <motion.div
//           initial={{opacity: 0, x: -20}}
//           animate={{opacity: 1, x: 0}}
//           className="rounded-xl bg-gray-800 p-6 shadow-lg"
//         >
//           <h2 className="mb-6 text-2xl font-bold">Profile Setup</h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Disabled Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   value={profileData.firstName}
//                   disabled
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   value={profileData.lastName}
//                   disabled
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={profileData.email}
//                   disabled
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
//                 />
//               </div>
//               <div>
//                 <label className="mb-2 block text-sm font-medium">Gender</label>
//                 <input
//                   type="text"
//                   value={profileData.gender}
//                   disabled
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
//                 />
//               </div>
//             </div>

//             {/* Interactive Fields */}
//             <div className="space-y-4">
//               <div>
//                 <label className="mb-2 block text-sm font-medium">Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   {...register('age', {required: true, min: 18, max: 100})}
//                   value={profileData.age}
//                   onChange={handleInputChange}
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 transition-all focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.age && (
//                   <p className="mt-1 text-sm text-red-500">
//                     Age is required (18-100)
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">About</label>
//                 <textarea
//                   name="about"
//                   {...register('about', {required: true, maxLength: 500})}
//                   value={profileData.about}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full rounded-lg bg-gray-700 px-4 py-2 transition-all focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.about && (
//                   <p className="mt-1 text-sm text-red-500">About is required</p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">Skills</label>
//                 <Select
//                   isMulti
//                   options={skillOptions}
//                   value={profileData.skills}
//                   onChange={handleSkillsChange}
//                   className="react-select-container"
//                   classNamePrefix="react-select"
//                   styles={{
//                     control: (base) => ({
//                       ...base,
//                       backgroundColor: '#374151',
//                       borderColor: '#4B5563',
//                     }),
//                     menu: (base) => ({
//                       ...base,
//                       backgroundColor: '#374151',
//                     }),
//                     option: (base, state) => ({
//                       ...base,
//                       backgroundColor: state.isFocused ? '#4B5563' : '#374151',
//                     }),
//                   }}
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Profile Picture
//                 </label>
//                 <div
//                   {...getRootProps()}
//                   className="cursor-pointer rounded-lg border-2 border-dashed border-gray-600 p-4 text-center transition-all hover:border-blue-500"
//                 >
//                   <input {...getInputProps()} />
//                   <FiUpload className="mx-auto mb-2 text-2xl" />
//                   <p>Drag & drop or click to upload</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex space-x-4">
//               <motion.button
//                 whileHover={{scale: 1.05}}
//                 whileTap={{scale: 0.95}}
//                 type="submit"
//                 className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2 transition-colors hover:bg-blue-700"
//               >
//                 <FiSave className="mr-2" /> Save Changes
//               </motion.button>
//               <motion.button
//                 whileHover={{scale: 1.05}}
//                 whileTap={{scale: 0.95}}
//                 type="button"
//                 onClick={handleReset}
//                 className="flex items-center justify-center rounded-lg bg-gray-600 px-6 py-2 transition-colors hover:bg-gray-700"
//               >
//                 <FiRefreshCw className="mr-2" /> Reset
//               </motion.button>
//             </div>
//           </form>
//         </motion.div>

//         {/* Profile Card */}
//         <motion.div
//           initial={{opacity: 0, x: 20}}
//           animate={{opacity: 1, x: 0}}
//           className="rounded-xl bg-gray-800 p-6 shadow-lg"
//         >
//           <div className="flex flex-col items-center">
//             <motion.img
//               src={profileData.photo}
//               alt="Profile"
//               className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-lg"
//               initial={{scale: 0}}
//               animate={{scale: 1}}
//               transition={{type: 'spring', stiffness: 200}}
//             />
//             <h2 className="mt-4 text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h2>
//             <p className="text-gray-400">{profileData.email}</p>
//             <div className="mt-6 w-full">
//               <h3 className="mb-2 text-lg font-semibold">About</h3>
//               <p className="text-gray-300">
//                 {profileData.about || 'No bio added yet'}
//               </p>
//             </div>
//             <div className="mt-6 w-full">
//               <h3 className="mb-2 text-lg font-semibold">Skills</h3>
//               <div className="flex flex-wrap gap-2">
//                 {profileData.skills.map((skill) => (
//                   <span
//                     key={skill.value}
//                     className="rounded-full bg-blue-600 px-3 py-1 text-sm"
//                   >
//                     {skill.label}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSetup;

// import React, {useState, useRef, useEffect} from 'react';
// import {motion, AnimatePresence} from 'framer-motion';
// import {FaHeart, FaTimes, FaStar, FaExpand} from 'react-icons/fa';

// const dummyProfiles = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     age: 28,
//     location: 'New York, NY',
//     bio: 'Product Designer with a passion for user-centric solutions',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
//     skills: ['UI/UX', 'Prototyping', 'User Research'],
//     interests: ['Photography', 'Travel', 'Art'],
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     age: 31,
//     location: 'San Francisco, CA',
//     bio: 'Full-stack developer building the future of tech',
//     image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
//     skills: ['React', 'Node.js', 'AWS'],
//     interests: ['Hiking', 'Gaming', 'Music'],
//   },
// ];

// const ProfileCard = ({profile, onSwipe, isTop}) => {
//   const [expanded, setExpanded] = useState(false);
//   const [dragStart, setDragStart] = useState({x: 0, y: 0});
//   const cardRef = useRef(null);

//   const handleDragEnd = (event, info) => {
//     const swipeThreshold = 100;
//     if (Math.abs(info.offset.x) > swipeThreshold) {
//       onSwipe(info.offset.x > 0 ? 'right' : 'left');
//     }
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className={`absolute w-full max-w-md ${isTop ? 'z-10' : 'z-0'}`}
//       drag={isTop ? 'x' : false}
//       dragConstraints={{left: 0, right: 0}}
//       onDragEnd={handleDragEnd}
//       initial={{scale: 0.95, opacity: 0}}
//       animate={{scale: 1, opacity: 1}}
//       exit={{scale: 0.95, opacity: 0}}
//       whileDrag={{cursor: 'grabbing'}}
//       style={{touchAction: 'none'}}
//     >
//       <div className="relative overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
//         <div className="relative h-[600px]">
//           <img
//             src={profile.image}
//             alt={profile.name}
//             className="h-full w-full object-cover"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <motion.div
//               initial={false}
//               animate={{height: expanded ? 'auto' : 'auto'}}
//             >
//               <div className="mb-2 flex items-center justify-between">
//                 <h2 className="text-2xl font-bold">
//                   {profile.name}, {profile.age}
//                 </h2>
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
//                 >
//                   <FaExpand className="h-4 w-4" />
//                 </button>
//               </div>

//               <p className="mb-2 text-lg">{profile.location}</p>
//               <p className="mb-4 text-sm">{profile.bio}</p>

//               {expanded && (
//                 <motion.div
//                   initial={{opacity: 0}}
//                   animate={{opacity: 1}}
//                   exit={{opacity: 0}}
//                 >
//                   <div className="mb-4">
//                     <h3 className="mb-2 text-sm font-semibold">Skills</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {profile.skills.map((skill, index) => (
//                         <span
//                           key={index}
//                           className="rounded-full bg-white/20 px-3 py-1 text-sm"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="mb-2 text-sm font-semibold">Interests</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {profile.interests.map((interest, index) => (
//                         <span
//                           key={index}
//                           className="rounded-full bg-white/20 px-3 py-1 text-sm"
//                         >
//                           {interest}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-4">
//         <button
//           className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
//           onClick={() => onSwipe('left')}
//         >
//           <FaTimes className="h-6 w-6 text-red-500" />
//         </button>

//         <button
//           className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
//           onClick={() => onSwipe('super')}
//         >
//           <FaStar className="h-6 w-6 text-blue-500" />
//         </button>

//         <button
//           className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
//           onClick={() => onSwipe('right')}
//         >
//           <FaHeart className="h-6 w-6 text-green-500" />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const MatchingInterface = () => {
//   const [profiles, setProfiles] = useState(dummyProfiles);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSwipe = (direction) => {
//     setProfiles((prev) => prev.slice(1));
//     setCurrentIndex((prev) => prev + 1);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4 dark:from-gray-900 dark:to-gray-800">
//       <div className="relative mx-auto h-[600px] w-full max-w-md">
//         <AnimatePresence>
//           {profiles.length > 0 ? (
//             <ProfileCard
//               key={profiles[0].id}
//               profile={profiles[0]}
//               onSwipe={handleSwipe}
//               isTop={true}
//             />
//           ) : (
//             <motion.div
//               initial={{opacity: 0}}
//               animate={{opacity: 1}}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="text-center text-gray-500 dark:text-gray-400">
//                 <h3 className="mb-2 text-xl font-semibold">No more profiles</h3>
//                 <p>Check back later for more matches!</p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default MatchingInterface;

// import React, {useState, useEffect} from 'react';
// import {motion, AnimatePresence} from 'framer-motion';
// import {FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun} from 'react-icons/fa';
// import {SiJavascript, SiPython, SiReact, SiNodedotjs} from 'react-icons/si';

// const DevConnect = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       name: 'Sarah Chen',
//       role: 'Full Stack Developer',
//       text: 'DevConnect helped me find the perfect team for my startup project. The skill-based matching is incredible!',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
//     },
//     {
//       name: 'Alex Rodriguez',
//       role: 'Backend Engineer',
//       text: "The platform's intuitive design made networking feel natural and enjoyable.",
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//     },
//   ];

//   const features = [
//     {
//       title: 'Swipe-based Networking',
//       description:
//         'Find your next collaboration partner with our intuitive swipe interface',
//       icon: '🤝',
//     },
//     {
//       title: 'Skill Matching',
//       description:
//         'Connect with developers who complement your technical expertise',
//       icon: '⚡',
//     },
//     {
//       title: 'Portfolio Showcase',
//       description: 'Highlight your best projects and technical achievements',
//       icon: '💼',
//     },
//     {
//       title: 'Instant Messaging',
//       description: 'Real-time communication with potential collaborators',
//       icon: '💬',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
//     >
//       {/* Header */}
//       <header className="fixed top-0 z-50 w-full bg-opacity-90 backdrop-blur-md">
//         <nav className="container mx-auto flex items-center justify-between px-6 py-4">
//           <h1 className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-2xl font-bold text-transparent">
//             DevTinder
//           </h1>
//           <div className="flex items-center space-x-6">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
//             </button>
//             <button className="rounded-full bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
//               Sign Up
//             </button>
//             <button className="rounded-full border-2 border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-50">
//               Login
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <motion.section
//         initial={{opacity: 0}}
//         animate={{opacity: 1}}
//         className="bg-gradient-to-b from-gray-900 to-blue-900 px-6 pb-20 pt-32 text-white"
//       >
//         <div className="container mx-auto text-center">
//           <motion.h2
//             initial={{y: 20}}
//             animate={{y: 0}}
//             className="mb-6 text-5xl font-bold md:text-7xl"
//           >
//             Connect. Collaborate. Code.
//           </motion.h2>
//           <motion.p
//             initial={{y: 20, opacity: 0}}
//             animate={{y: 0, opacity: 1}}
//             transition={{delay: 0.2}}
//             className="mb-12 text-xl text-gray-300 md:text-2xl"
//           >
//             The Ultimate Networking Platform for Developers
//           </motion.p>
//           <motion.button
//             whileHover={{scale: 1.05}}
//             whileTap={{scale: 0.95}}
//             className="rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-600"
//           >
//             Join DevConnect
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* Features Section */}
//       <section className="px-6 py-20">
//         <div className="container mx-auto">
//           <h3 className="mb-16 text-center text-3xl font-bold">
//             Why Choose DevConnect?
//           </h3>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{opacity: 0, y: 20}}
//                 whileInView={{opacity: 1, y: 0}}
//                 transition={{delay: index * 0.1}}
//                 className="rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800"
//               >
//                 <div className="mb-4 text-4xl">{feature.icon}</div>
//                 <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="bg-gray-50 px-6 py-20 dark:bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h3 className="mb-16 text-3xl font-bold">Supported Technologies</h3>
//           <div className="flex justify-center space-x-8 text-4xl">
//             <motion.div whileHover={{scale: 1.2}}>
//               <SiJavascript className="text-yellow-400" />
//             </motion.div>
//             <motion.div whileHover={{scale: 1.2}}>
//               <SiPython className="text-blue-500" />
//             </motion.div>
//             <motion.div whileHover={{scale: 1.2}}>
//               <SiReact className="text-blue-400" />
//             </motion.div>
//             <motion.div whileHover={{scale: 1.2}}>
//               <SiNodedotjs className="text-green-500" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="px-6 py-20">
//         <div className="container mx-auto">
//           <h3 className="mb-16 text-center text-3xl font-bold">
//             Developer Stories
//           </h3>
//           <div className="mx-auto max-w-3xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentTestimonial}
//                 initial={{opacity: 0, x: 20}}
//                 animate={{opacity: 1, x: 0}}
//                 exit={{opacity: 0, x: -20}}
//                 className="flex flex-col items-center text-center"
//               >
//                 <img
//                   src={testimonials[currentTestimonial].image}
//                   alt={testimonials[currentTestimonial].name}
//                   className="mb-4 h-20 w-20 rounded-full object-cover"
//                 />
//                 <p className="mb-4 text-lg">
//                   {testimonials[currentTestimonial].text}
//                 </p>
//                 <p className="font-semibold">
//                   {testimonials[currentTestimonial].name}
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   {testimonials[currentTestimonial].role}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 px-6 py-12 text-white">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
//             <div>
//               <h4 className="mb-4 text-xl font-bold">DevConnect</h4>
//               <p className="text-gray-400">Connect with developers worldwide</p>
//             </div>
//             <div>
//               <h4 className="mb-4 text-xl font-bold">Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>About Us</li>
//                 <li>Features</li>
//                 <li>Pricing</li>
//                 <li>Blog</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 text-xl font-bold">Legal</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//                 <li>Cookie Policy</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 text-xl font-bold">Connect</h4>
//               <div className="flex space-x-4 text-2xl">
//                 <FaGithub className="cursor-pointer hover:text-gray-300" />
//                 <FaLinkedin className="cursor-pointer hover:text-gray-300" />
//                 <FaEnvelope className="cursor-pointer hover:text-gray-300" />
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
//             <p>
//               © {new Date().getFullYear()} DevConnect. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DevConnect;

import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMoon,
  FiSun,
  FiDownload,
} from 'react-icons/fi';
import {FaCode, FaHandshake, FaProjectDiagram} from 'react-icons/fa';

const DevSwipePlatform = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const developerProfiles = [
    {
      name: 'Sarah Chen',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      name: 'Marcus Johnson',
      role: 'Frontend Architect',
      company: 'Digital Solutions Co.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      skills: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    },
  ];

  const features = [
    {
      icon: <FaCode className="mb-4 text-4xl text-emerald-400" />,
      title: 'Skill Matching',
      description:
        'Find developers with complementary skills for your next project',
    },
    {
      icon: <FaHandshake className="mb-4 text-4xl text-emerald-400" />,
      title: 'Easy Collaboration',
      description: 'Connect instantly with developers worldwide',
    },
    {
      icon: <FaProjectDiagram className="mb-4 text-4xl text-emerald-400" />,
      title: 'Project Management',
      description: 'Track and manage your collaborations effectively',
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <nav className="fixed z-50 w-full bg-gray-900 bg-opacity-90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-2xl font-bold text-transparent">
                DevSwipe
              </span>
              <div className="ml-10 hidden md:block">
                <div className="flex items-center space-x-4">
                  <a
                    href="#features"
                    className="rounded-md px-3 py-2 text-gray-300 hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-md px-3 py-2 text-gray-300 hover:text-white"
                  >
                    How It Works
                  </a>
                  <a
                    href="#stories"
                    className="rounded-md px-3 py-2 text-gray-300 hover:text-white"
                  >
                    Developer Stories
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-full p-2 hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <FiSun className="text-yellow-400" />
                ) : (
                  <FiMoon />
                )}
              </button>
              <button className="transform rounded-md border border-emerald-400 px-8 py-2 text-emerald-400 transition duration-300 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 hover:text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="relative overflow-hidden pb-20 pt-32 text-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="mb-6 text-5xl font-bold md:text-6xl"
          >
            Connect. Collaborate. Create.
          </motion.h1>
          <motion.p
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.2}}
            className="mb-8 text-xl text-gray-400"
          >
            The professional networking platform for developers
          </motion.p>
          {/* <div className="flex justify-center gap-4">
            <button className="rounded-md bg-emerald-500 px-8 py-3 text-white transition hover:bg-emerald-600">
              Get Started
            </button>
            <button className="rounded-md border border-emerald-500 px-8 py-3 text-emerald-500 transition hover:bg-emerald-500 hover:text-white">
              Learn More
            </button>
          </div> */}

          <div className="flex justify-center gap-4">
            <button className="transform rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-3 text-white transition duration-300 hover:scale-105 hover:from-emerald-600 hover:to-blue-600">
              Get Started
            </button>
            {/* <button className="transform rounded-md border border-emerald-400 px-8 py-3 text-emerald-400 transition duration-300 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 hover:text-white">
              Learn More
            </button> */}
          </div>
        </div>
      </motion.section>
      <section id="features" className="bg-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Platform Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: index * 0.2}}
                className="rounded-lg bg-gray-700 p-6 text-center"
              >
                {feature.icon}
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="stories" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Developer Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {developerProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{scale: 0.9, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                className="overflow-hidden rounded-lg bg-gray-800"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{profile.name}</h3>
                  <p className="text-emerald-400">{profile.role}</p>
                  <p className="mb-4 text-gray-400">{profile.company}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {profile.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-700 px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <FiGithub className="cursor-pointer text-xl hover:text-emerald-400" />
                    <FiLinkedin className="cursor-pointer text-xl hover:text-emerald-400" />
                    <FiTwitter className="cursor-pointer text-xl hover:text-emerald-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-emerald-400">
                DevSwipe
              </h3>
              <p className="text-gray-400">Connect with developers worldwide</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Developer Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Connect</h4>
              <div className="flex gap-4">
                <FiGithub className="cursor-pointer text-xl hover:text-emerald-400" />
                <FiLinkedin className="cursor-pointer text-xl hover:text-emerald-400" />
                <FiTwitter className="cursor-pointer text-xl hover:text-emerald-400" />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 DevSwipe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevSwipePlatform;