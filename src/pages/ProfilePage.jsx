import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from 'react-icons/fa';

const ProfilePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const profileData = {
    name: 'John Anderson',
    role: 'Senior Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    email: 'john.anderson@example.com',
    location: 'San Francisco, CA',
    about:
      'Passionate software engineer with 8+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
    skills: [
      {name: 'React', level: 95},
      {name: 'Node.js', level: 90},
      {name: 'TypeScript', level: 85},
      {name: 'AWS', level: 80},
      {name: 'Docker', level: 85},
      {name: 'GraphQL', level: 75},
    ],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://portfolio.com',
    },
  };

  const containerVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut'}},
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2238] to-[#2C3E50] p-4 md:p-8">
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gray-900/50 shadow-2xl backdrop-blur-lg"
      >
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <motion.div
              whileHover={{scale: 1.05, rotate: 5}}
              className="relative h-48 w-48"
            >
              <img
                src={profileData.image}
                alt="Profile"
                className="h-full w-full rounded-full border-4 border-purple-500/50 object-cover transition-all duration-300 hover:border-blue-500/50"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent"
              >
                {profileData.name}
              </motion.h1>
              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}
                className="mt-2 text-xl text-gray-300"
              >
                {profileData.role}
              </motion.p>

              <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
                <motion.a
                  whileHover={{scale: 1.1}}
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-purple-400"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{scale: 1.1}}
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{scale: 1.1}}
                  href={profileData.social.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-green-400"
                >
                  <FaGlobe size={24} />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4}}
              className="mb-4 flex items-center gap-2 text-gray-300"
            >
              <FaEnvelope className="text-purple-400" />
              <span>{profileData.email}</span>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
              className="mb-6 flex items-center gap-2 text-gray-300"
            >
              <FaMapMarkerAlt className="text-purple-400" />
              <span>{profileData.location}</span>
            </motion.div>

            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6}}
              className="mb-8 leading-relaxed text-gray-300"
            >
              {profileData.about}
            </motion.p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {profileData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{delay: 0.2 * index}}
                  whileHover={{scale: 1.05}}
                  className="rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4"
                >
                  <h3 className="mb-2 font-semibold text-gray-200">
                    {skill.name}
                  </h3>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="mt-8 flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-white transition-all duration-300 hover:from-purple-600 hover:to-blue-600"
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
