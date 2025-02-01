import {motion} from 'framer-motion';
import {useMemo} from 'react';

const FeaturesSection = ({features}) => {
  const memoizedFeatures = useMemo(() => features, [features]);

  return (
    <section id="features" className="bg-gray-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          Platform Features
        </h2>
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {staggerChildren: 0.2}},
          }}
        >
          {memoizedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0},
              }}
              className="rounded-lg bg-gray-700 p-6 text-center"
            >
              {feature.icon}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
