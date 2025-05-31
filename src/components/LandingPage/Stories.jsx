import {motion} from 'framer-motion';
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import {SiGmail, SiX} from 'react-icons/si';
import {useMemo} from 'react';

const Stories = ({developerProfiles}) => {
  const memoizedProfiles = useMemo(
    () => developerProfiles,
    [developerProfiles],
  );

  const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };

  const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0},
  };

  const listItemVariants = {
    hidden: {opacity: 0, x: -10},
    visible: {opacity: 1, x: 0},
  };

  return (
    <section
      id="stories"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold text-white"
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          Meet the Creator
        </motion.h2>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Profile Card */}
          <motion.div
            className="w-full lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={staggerContainer}
          >
            {memoizedProfiles.map((profile, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-emerald-600 bg-gray-900 bg-opacity-80 backdrop-blur-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="absolute bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="p-8">
                  <motion.div
                    className="flex flex-col items-center"
                    variants={fadeInUp}
                  >
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-75 blur-md"></div>
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="relative z-10 h-40 w-40 rounded-full border-4 border-gray-800 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {profile.name}
                    </h3>
                    <p className="mt-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text font-medium text-transparent">
                      {profile.role}
                    </p>
                    <p className="mt-1 text-gray-400">{profile.company}</p>
                  </motion.div>

                  {profile.skills && profile.skills.length > 0 && (
                    <motion.div className="mt-8" variants={fadeInUp}>
                      <h4 className="mb-4 text-lg font-semibold text-white">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {profile.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            variants={listItemVariants}
                            className="rounded-full bg-gray-700 px-4 py-1 text-sm font-medium text-white transition-all hover:bg-emerald-600"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    className="mt-8 flex justify-center gap-5"
                    variants={fadeInUp}
                  >
                    <motion.a
                      href="https://github.com/Pandey840/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 transition-colors hover:text-emerald-400"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/dhiraj-pandey-478aa9231/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 transition-colors hover:text-emerald-400"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                    >
                      <FiLinkedin />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/DSPandey913"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 transition-colors hover:text-emerald-400"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                    >
                      <SiX />
                    </motion.a>
                    <motion.a
                      href="mailto:dhirajpandey37@gmail.com"
                      className="text-2xl text-gray-400 transition-colors hover:text-emerald-400"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.95}}
                    >
                      <SiGmail />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Journey Content */}
          <motion.div
            className="w-full lg:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl"
            >
              <div className="p-8">
                <motion.h3
                  className="mb-8 text-3xl font-bold text-white"
                  variants={fadeInUp}
                >
                  My Developer Journey
                </motion.h3>

                <motion.article className="space-y-6">
                  <motion.p
                    variants={paragraphVariants}
                    className="text-gray-300"
                  >
                    My journey as a developer began in{' '}
                    <strong className="text-emerald-400">October 2022</strong>{' '}
                    with an internship at{' '}
                    <strong className="text-emerald-400">Primathon</strong>,
                    where I cultivated my passion for building intuitive user
                    interfaces and writing clean, maintainable code. Those
                    initial months laid the foundation for my coding discipline,
                    problem-solving mindset, and hunger for learning.
                  </motion.p>

                  <motion.p
                    variants={paragraphVariants}
                    className="text-gray-300"
                  >
                    After completing my internship, I received a full-time offer
                    from{' '}
                    <strong className="text-emerald-400">
                      Reshami Infocomm Pvt. Ltd.
                    </strong>
                    , where I worked for{' '}
                    <strong className="text-emerald-400">9 months</strong>.
                    There, I contributed to multiple production-level projects,
                    including:
                  </motion.p>

                  <motion.ul
                    variants={staggerContainer}
                    className="space-y-3 pl-6 text-gray-300"
                  >
                    {[
                      'A user-friendly restaurant and hotel accounting web app',
                      'Features like KOT management, real-time dashboards, and multi-role interfaces',
                      'Led UI development and managed component architecture',
                      'Ensured seamless API integration across responsive layouts',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={listItemVariants}
                        className="relative pl-4 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-400"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.p
                    variants={paragraphVariants}
                    className="text-gray-300"
                  >
                    My career took a significant leap in{' '}
                    <strong className="text-emerald-400">January 2024</strong>{' '}
                    when I joined{' '}
                    <strong className="text-emerald-400">Intemize</strong>. This
                    marked a turning point in my growth, allowing me to explore
                    development at a system level. My key contributions
                    included:
                  </motion.p>

                  <motion.ul
                    variants={staggerContainer}
                    className="space-y-3 pl-6 text-gray-300"
                  >
                    {[
                      'Building secure, scalable applications',
                      'Designing role-based access controls and implementing JWT-based authentication',
                      'Integrating WebSockets for real-time notifications',
                      'Implementing Agora SDK for video call functionality',
                      'Designing and consuming secure RESTful APIs',
                      'Enhancing performance, accessibility, and maintainability in every feature',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={listItemVariants}
                        className="relative pl-4 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-400"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.p
                    variants={paragraphVariants}
                    className="text-gray-300"
                  >
                    During this time, I also stepped beyond frontend, diving
                    into{' '}
                    <strong className="text-emerald-400">
                      Node.js, Express, and MongoDB
                    </strong>
                    , gaining a strong grasp of backend architecture and API
                    security.
                  </motion.p>

                  <motion.p
                    variants={paragraphVariants}
                    className="text-gray-300"
                  >
                    Now, all my learnings, passion, and hands-on experience are
                    coming together in{' '}
                    <strong className="text-emerald-400">DevTinder</strong> — a
                    platform crafted to help developers connect, collaborate,
                    and grow. From system design to UI polish, security to
                    scalability, DevTinder reflects not just what I've built,
                    but who I've become as a developer.
                  </motion.p>

                  <motion.blockquote
                    variants={fadeInUp}
                    className="relative my-8 pl-6 italic text-gray-300 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:from-emerald-400 before:to-emerald-600"
                  >
                    <p className="text-lg">
                      "For me, development isn’t just a job, it’s a journey of
                      turning ideas into meaningful experiences through
                      thoughtful code, relentless effort, and a mindset that
                      never stops learning. Because great software is built by
                      those who grow with every line they write."
                    </p>
                  </motion.blockquote>
                </motion.article>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
