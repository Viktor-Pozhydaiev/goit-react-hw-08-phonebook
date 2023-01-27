import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  Component: PropTypes.elementType,
  redirectTo: PropTypes.string.isRequired,
};
