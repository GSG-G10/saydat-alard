import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import http from '../services/httpService';
import { apiEndPoint } from '../services/config.json';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await http.get(`${apiEndPoint}/userinfo`);
      setLoading(true);
      setUserData({ ...data });
      setLoading(false);
    } catch (error) {
      setLoading(setLoading(false));
      setUserData(null);
    }
  };
  const history = useHistory();

  useEffect(() => {
    getData();
    return () => {
      http.source.cancel('request stopped by user');
    };
  }, []);

  const logout = () => {
    http.get(`${apiEndPoint}/logout`);
    setUserData(null);
    history.push('/');
  };
  if (loading) {
    return <Spin size="large" />;
  }
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
