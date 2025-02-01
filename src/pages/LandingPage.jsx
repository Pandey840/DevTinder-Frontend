import {developerProfiles, features} from '../data/LandingPage';
import {
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
  Stories,
} from '../components/LandingPage';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <FeaturesSection features={features} />
      <Stories developerProfiles={developerProfiles} />
      <Footer />
    </div>
  );
};

export default LandingPage;
