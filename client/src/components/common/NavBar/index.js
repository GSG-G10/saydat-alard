/* eslint-disable */
import React, { useContext } from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import style from './style.module.css';

const signInButton = () => <Button key="1">تسجبل دخول</Button>;
const signUpButton = () => <Button key="2">إنشاء حساب</Button>;
const accountButton = (name) => <Button key="3">{name}</Button>;
const logoutButton = () => <Button key="4">تسجبل خروج</Button>;

const IconLink = ({ src, text }) => (
  <Link to="/" className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
  </Link>
);

const NavBar = () => {
  const { userData } = useContext(AuthContext);
  const navButtons = [];
  if (userData.id) {
    navButtons.push(accountButton(), logoutButton());
  } else {
    navButtons.push(signInButton(), signUpButton());
  }
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        className="site-nav-bar"
        ghost
        title={IconLink({ src: './logo.png', text: 'Logo' })}
        extra={navButtons}
      />
    </div>
  );
};

export default NavBar;
