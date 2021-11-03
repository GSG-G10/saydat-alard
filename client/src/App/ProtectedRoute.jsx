import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute(props) {
  const userInfo = useContext(AuthContext);
  const { children } = props;
  const { isAdmin } = userInfo;

  return (
    isAdmin ? (
      <Route>
        {children}
      </Route>
    ) : <Redirect to={{ pathname: '/' }} />

  );
}
ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProtectedRoute;
