import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed z-50 w-full bg-gray-900 bg-opacity-60 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-2xl font-bold text-transparent">
              DevTinder
            </span>
            <div className="ml-10 hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="#features"
                  className="rounded-md px-3 py-2 text-gray-300 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#stories"
                  className="rounded-md px-3 py-2 text-gray-300 hover:text-white"
                >
                  Developer Stories
                </a>
              </div>
            </div>
          </div>
          <Link
            to="/login"
            className="transform rounded-md border border-emerald-400 px-8 py-2 text-emerald-400 transition duration-300 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
