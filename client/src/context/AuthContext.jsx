import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import httpService from '../services/httpService';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const data = await httpService.get('/api/v1/userinfo');
      setUserData(data);
    };
    getData();
  }, []);

  const logout = () => {
    httpService.get('/api/v1/logout');
    setUserData({});
    history.push('/');
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
