import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  return (
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

        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="transform rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-3 text-white transition duration-300 hover:scale-105 hover:from-emerald-600 hover:to-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
