/* eslint-disable */
import React, { useContext } from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import style from './style.module.css';

const signInButton = () => (
  <Link key="1" to="/login" className={style.navLink}>
    تسجبل دخول
  </Link>
);
const signUpButton = () => (
  <Link key="2" to="/signup" className={style.navButton}>
    إنشاء حساب
  </Link>
);
const dashBoardButton = () => (
  <Link key="3" to="/dashboard" className={style.navLink}>
    لوحة التحكم
  </Link>
);
const accountButton = (name) => (
  <p className={style['account-name']} key="4">
    {name}
  </p>
);
const logoutButton = (logout) => (
  <Button key="5" style={{ borderRadius: ' 20px' }} onClick={logout}>
    تسجبل خروج
  </Button>
);

const IconLink = ({ src, text }) => (
  <Link key="6" to="/" className="example-link">
    <img className={style['example-link-icon']} src={src} alt={text} />
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
