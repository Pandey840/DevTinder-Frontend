import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi';
import logo from '/assets/images/devTinder-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src={logo} className='w-16' />
            {/* <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-2xl font-bold text-transparent">
              DevTinder
            </span> */}
            <p className="mt-2 text-gray-400">
              Connect with developers worldwide
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Developer Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-4">
              <FiGithub className="cursor-pointer text-xl hover:text-emerald-400" />
              <FiLinkedin className="cursor-pointer text-xl hover:text-emerald-400" />
              <FiTwitter className="cursor-pointer text-xl hover:text-emerald-400" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2024 DevSwipe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
