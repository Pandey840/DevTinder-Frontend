import {motion} from 'framer-motion';
import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi';
import {useMemo} from 'react';

const Stories = ({developerProfiles}) => {
  const memoizedProfiles = useMemo(
    () => developerProfiles,
    [developerProfiles],
  );

  return (
    <section id="stories" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          Developer Stories
        </h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {staggerChildren: 0.2}},
          }}
        >
          {memoizedProfiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {scale: 0.9, opacity: 0},
                visible: {scale: 1, opacity: 1},
              }}
              className="overflow-hidden rounded-lg bg-gray-800"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {profile.name}
                </h3>
                <p className="text-emerald-400">{profile.role}</p>
                <p className="mb-4 text-gray-400">{profile.company}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-white">
                  <FiGithub className="cursor-pointer text-xl hover:text-emerald-400" />
                  <FiLinkedin className="cursor-pointer text-xl hover:text-emerald-400" />
                  <FiTwitter className="cursor-pointer text-xl hover:text-emerald-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
