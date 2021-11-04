import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import http from '../services/httpService';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await http.get('/api/v1/userinfo');
        setUserData(data);
      };
      getData();
    } catch (error) {
      if (error.status >= 400 && error.status <= 500) {
        message.error(error.message);
      }
    }

    return () => {
      http.source.cancel('request stopped by user');
    };
  }, []);
  return (
    <AuthContext.Provider value={{ userData }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
