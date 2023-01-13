import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  //return shouldRedirect ?
  return (
    <>
      <Navigate to={redirectTo} /> : Component;
    </>
  );
};
