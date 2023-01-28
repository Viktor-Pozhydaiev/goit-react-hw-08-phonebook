import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { IsLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = IsLoggedIn && !isRefreshing;
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
PrivateRoute.propTypes = {
  Component: PropTypes.elementType,
  redirectTo: PropTypes.string.isRequired,
};
