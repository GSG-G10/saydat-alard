/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './services/auth';
import Dashboard from './pages/Dashboard';
import City from './pages/City';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Error from './pages/Error';

const axios = require('axios').default;

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/userinfo');
      const { role } = data;
      setIsAdmin(role);
    };
    getData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/city/:id">
          <City />
        </Route>
        <ProtectedRoute path="/dashboard" isAdmin={isAdmin}>
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
  );
}

export default App;
