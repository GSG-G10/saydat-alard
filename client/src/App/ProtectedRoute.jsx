import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute(props) {
  const { userData } = useContext(AuthContext);
  const { children } = props;
  const { role } = userData;

  return role ? <Route>{children}</Route> : <Redirect to={{ pathname: '/' }} />;
}
ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProtectedRoute;
