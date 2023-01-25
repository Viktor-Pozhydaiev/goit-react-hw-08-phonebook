import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { IsLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !IsLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
