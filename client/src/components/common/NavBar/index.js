/* eslint-disable */
import React, { useContext } from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import style from './style.module.css';

const signInButton = () => (
  <Button key="1">
    <Link to="/login">تسجبل دخول</Link>
  </Button>
);
const signUpButton = () => (
  <Button key="2">
    <Link to="/signup">إنشاء حساب</Link>
  </Button>
);
const dashBoardButton = () => (
  <Button key="3">
    <Link to="/dashboard">لوحة التحكم</Link>
  </Button>
);
const accountButton = (name) => (
  <p className={style['account-name']} key="4">
    {name}
  </p>
);
const logoutButton = (logout) => (
  <Button key="5" onClick={logout}>
    تسجبل خروج
  </Button>
);

const IconLink = ({ src, text }) => (
  <Link to="/" className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
  </Link>
);

const NavBar = () => {
  const { userData, logout } = useContext(AuthContext);
  const navButtons = [];
  if (userData.id) {
    navButtons.push(accountButton(userData.name), logoutButton(logout));
    if (userData.role) {
      navButtons.push(dashBoardButton());
    }
  } else {
    navButtons.push(signInButton(), signUpButton());
  }

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        className="site-nav-bar"
        ghost
        title={IconLink({ src: '/logo.png', text: 'Logo' })}
        extra={navButtons}
      />
    </div>
  );
};

export default NavBar;
