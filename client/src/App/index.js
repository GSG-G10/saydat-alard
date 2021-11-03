/* eslint-disable no-console */
import React from 'react';
import './App.less';
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
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/city/:id">
            <City />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/notfound">
            <Error />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
