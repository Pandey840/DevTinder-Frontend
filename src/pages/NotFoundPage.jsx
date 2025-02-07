import {motion} from 'framer-motion';
import {FaExclamationTriangle, FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="relative z-10 w-full max-w-md rounded-xl bg-gray-800 bg-opacity-50 p-8 shadow-2xl backdrop-blur-lg"
      >
        <div className="mb-8 text-center">
          <motion.div
            initial={{scale: 0.9}}
            animate={{scale: 1}}
            className="mb-5 flex items-center justify-center"
          >
            <FaExclamationTriangle className="text-6xl text-yellow-500" />
          </motion.div>
          <motion.h1
            initial={{scale: 0.9}}
            animate={{scale: 1}}
            transition={{delay: 0.2}}
            className="mb-3 text-3xl font-bold text-white"
          >
            404 - Page Not Found
          </motion.h1>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4}}
            className="mt-2 text-gray-400"
          >
            Oops! The page you're looking for doesn't exist.
          </motion.p>
        </div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.6}}
          className="mt-6 text-center"
        >
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}>
            <Link
              to="/home"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-blue-600 hover:shadow-lg"
            >
              <FaHome className="mr-2" />
              Go to Dashboard
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
