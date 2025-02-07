import {useState, useRef} from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import {FaHeart, FaTimes, FaStar, FaExpand} from 'react-icons/fa';

const dummyProfiles = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 28,
    location: 'New York, NY',
    bio: 'Product Designer with a passion for user-centric solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    skills: ['UI/UX', 'Prototyping', 'User Research'],
    interests: ['Photography', 'Travel', 'Art'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 31,
    location: 'San Francisco, CA',
    bio: 'Full-stack developer building the future of tech',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    skills: ['React', 'Node.js', 'AWS'],
    interests: ['Hiking', 'Gaming', 'Music'],
  },
];

const ProfileCard = ({profile, onSwipe, isTop}) => {
  const [expanded, setExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const labelOpacity = useTransform(x, [-200, -50, 50, 200], [0, 1, 1, 0]);
  const labelText = useTransform(x, (x) => (x > 0 ? 'LIKE' : 'NOPE'));
  const labelColor = useTransform(x, (x) =>
    x > 0 ? 'rgba(76, 217, 100, 1)' : 'rgba(255, 59, 48, 1)',
  );

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);

    const swipeThreshold = 100;
    const velocityThreshold = 500;
    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.velocity.x) > velocityThreshold
    ) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`absolute w-full max-w-md ${isTop ? 'z-10' : 'z-0'}`}
      drag={isTop}
      dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{x, y, rotate, touchAction: 'none'}}
      initial={{scale: 0.95, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      exit={{scale: 0.95, opacity: 0}}
      whileDrag={{cursor: 'grabbing'}}
      transition={{type: 'spring', stiffness: 300, damping: 30}}
    >
      {isDragging && (
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{opacity: labelOpacity, zIndex: 1}}
        >
          <motion.span
            className="text-7xl font-bold uppercase tracking-widest"
            style={{color: labelColor}}
          >
            {labelText}
          </motion.span>
        </motion.div>
      )}
      <div className="relative overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
        <div className="relative h-[600px]">
          <img
            src={profile.image}
            alt={profile.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.div
              initial={false}
              animate={{height: expanded ? 'auto' : 'auto'}}
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {profile.name}, {profile.age}
                </h2>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <FaExpand className="h-4 w-4" />
                </button>
              </div>

              <p className="mb-2 text-lg">{profile.location}</p>
              <p className="mb-4 text-sm">{profile.bio}</p>

              {expanded && (
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                >
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-white/20 px-3 py-1 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-white/20 px-3 py-1 text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-4">
        <button
          className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
          onClick={() => onSwipe('left')}
        >
          <FaTimes className="h-6 w-6 text-red-500" />
        </button>

        <button
          className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
          onClick={() => onSwipe('super')}
        >
          <FaStar className="h-6 w-6 text-blue-500" />
        </button>

        <button
          className="rounded-full bg-white p-4 shadow-lg transition hover:scale-110"
          onClick={() => onSwipe('right')}
        >
          <FaHeart className="h-6 w-6 text-green-500" />
        </button>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const [profiles, setProfiles] = useState(dummyProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    setProfiles((prev) => prev.slice(1));
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative mx-auto h-[600px] w-full max-w-md rounded-xl border shadow-2xl shadow-[]">
        <AnimatePresence>
          {profiles.length > 0 ? (
            <ProfileCard
              key={profiles[0].id}
              profile={profiles[0]}
              onSwipe={handleSwipe}
              isTop={true}
            />
          ) : (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center text-gray-500 dark:text-gray-400">
                <h3 className="mb-2 text-xl font-semibold">No more profiles</h3>
                <p>Check back later for more matches!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
