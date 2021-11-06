import React from 'react';
import './App.less';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import City from '../pages/City';
import Home from '../pages/Home';
import SignUp from '../pages/signup/SignUp';
import Login from '../pages/Login';
import Error from '../pages/Error';

import AuthProvider from '../context/AuthContext';
import CityProvider from '../context/CityContext';

function App() {
  const routes = [
    {
      path: '/city/:id',
      children: <CityProvider><City /></CityProvider>,
      public: true,
      exact: true,
    },
    {
      path: '/dashboard',
      children: <Dashboard />,
      public: false,
      exact: true,
    },
    {
      path: '/login',
      children: <Login />,
      public: true,
      exact: true,
    },
    {
      path: '/signup',
      children: <SignUp />,
      public: true,
      exact: true,
    },
    {
      path: '/notfound',
      children: <Error />,
      public: true,
      exact: false,
    },
    {
      path: '/',
      children: <Home />,
      public: true,
      exact: true,
    },
  ];
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {
          routes.map((route) => (route.public
            ? <Route key={route.path} exact={route.exact} path={route.path}>{route.children}</Route>
            : (
              <ProtectedRoute key={route.path} exact={route.exact} path={route.path}>
                {route.children}

              </ProtectedRoute>
            )))
        }
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
