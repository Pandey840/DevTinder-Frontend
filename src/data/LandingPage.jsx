import {FaCode, FaHandshake, FaProjectDiagram} from 'react-icons/fa';

const developerProfiles = [
  {
    name: 'Sarah Chen',
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    image: '',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Marcus Johnson',
    role: 'Frontend Architect',
    company: 'Digital Solutions Co.',
    image: '',
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

export {developerProfiles, features};
