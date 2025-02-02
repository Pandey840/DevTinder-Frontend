import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
  const isAuthenticated = false;
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
