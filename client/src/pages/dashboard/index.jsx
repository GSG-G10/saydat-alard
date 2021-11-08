import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import CityDashboard from './city/City';

function Dashboard() {
  const routes = [
    {
      path: '/dashboard',
      children: CityDashboard,

    },
    {
      path: '/dashboard/story',
      children: CityDashboard,

    },
    {
      path: '/dashboard/proverb',
      children: CityDashboard,

    },
  ];
  return (
    <>
      <p> Dashboard</p>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.children} />
          ))}

        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;
