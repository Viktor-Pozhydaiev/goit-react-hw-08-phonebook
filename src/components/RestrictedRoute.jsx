import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //   const { isLoggedIn } = useAuth();
  //   return isLoggedIn ?
  return (
    <>
      <Navigate to={redirectTo} /> : Component
    </>
  );
};
