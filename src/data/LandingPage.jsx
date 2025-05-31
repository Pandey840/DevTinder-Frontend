import {FaCode, FaHandshake, FaProjectDiagram} from 'react-icons/fa';

const developerProfiles = [
  {
    name: 'Dhiraj Pandey',
    role: 'MERN Stack Developer',
    company: 'Intemize',
    image: '/assets/images/devImg.jpg',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Sanity.io',
    ],
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

export {developerProfiles, features};
