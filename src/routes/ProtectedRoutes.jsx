import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../hooks';

const ProtectedRoutes = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
