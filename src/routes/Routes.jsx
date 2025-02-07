import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import {
  HomePage,
  LandingPage,
  LoginPage,
  ProfileSetupPage,
  SignUpPage,
} from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoutes />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/profile-setup',
        element: <ProfileSetupPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
