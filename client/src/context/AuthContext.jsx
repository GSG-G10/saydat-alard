import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import http from '../services/httpService';

export const AuthContext = createContext();

const getData = async (cb) => {
  try {
    const data = await http.get('/api/v1/userinfo');
    cb({ ...data });
  } catch (error) {
    cb(null);
  }
};

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getData(setUserData);
    return () => {
      http.source.cancel('request stopped by user');
    };
  }, []);

  const logout = () => {
    http.get('/api/v1/logout');
    setUserData({});
    history.push('/');
  };

  return (
    userData ? (
      <AuthContext.Provider value={{ userData, setUserData, logout }}>
        {children}
      </AuthContext.Provider>
    ) : <p>Loading</p>

  );
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
