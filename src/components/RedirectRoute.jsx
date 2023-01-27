import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RedirectRoute = ({ redirectTo = '/' }) => {
  return <Navigate to={redirectTo} />;
};

RedirectRoute.propTypes = {
  redirectTo: PropTypes.string,
};
