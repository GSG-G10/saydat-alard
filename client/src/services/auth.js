import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  const { isAdmin, children } = props;

  return (
    isAdmin ? (
      <Route>
        {children}
      </Route>
    ) : <Redirect to={{ pathname: '/' }} />

  );
}

export default ProtectedRoute;
