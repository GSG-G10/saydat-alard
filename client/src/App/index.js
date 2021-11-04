/* eslint-disable no-console */
import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import City from '../pages/City';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Error from '../pages/Error';

import AuthProvider from '../context/AuthContext';

function App() {
  const routes = [
    {
      path: '/city/:id',
      children: <City />,
      public: true,
    },
    {
      path: '/dashboard',
      children: <Dashboard />,
      public: false,
    },
    {
      path: '/login',
      children: <Login />,
      public: true,
    },
    {
      path: '/signup',
      children: <SignUp />,
      public: true,
    },
    {
      path: '/notfound',
      children: <Error />,
      public: true,
    },
    {
      path: '/',
      children: <Home />,
      public: true,
    },
  ];
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {
          routes.map((route) => (route.public
            ? <Route exact path={route.path}>{route.children}</Route>
            : (
              <ProtectedRoute exact path={route.path}>
                {route.children}

              </ProtectedRoute>
            )))
        }
          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
