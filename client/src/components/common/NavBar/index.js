/* eslint-disable */
import React, { useContext, useMemo } from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import style from './style.module.css';

const signInButton = () => (
  <Link key="1" to="/login" className={style.navLink}>
    تسجيل دخول{' '}
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
const homePageButton = () => (
  <Link key="3" to="/" className={style.navLink}>
    الصفحة الرئيسية
  </Link>
);
const accountButton = (name) => (
  <p className={style['account-name']} key="4">
    {name}
  </p>
);
const logoutButton = (logout) => (
  <Button key="5" style={{ borderRadius: ' 20px' }} onClick={logout}>
    تسجيل خروج
  </Button>
);

const IconLink = ({ src, text }) => (
  <Link key="6" to="/" className="example-link">
    <img className={style['example-link-icon']} src={src} alt={text} />
  </Link>
);

const NavBar = () => {
  const { userData, logout } = useContext(AuthContext);
  const navButtons = useMemo(() => {
    if (userData) {
      const buttons = [accountButton(userData.name), logoutButton(logout)];
      if (userData.role) {
        return buttons.concat(dashBoardButton());
      }
      return buttons;
    } else {
      return [signInButton(), signUpButton(),homePageButton()];
    }
  }, [userData]);

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
IconLink.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.bool.isRequired,
};
export default NavBar;
