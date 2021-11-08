import React, { createContext, useState, useEffect } from 'react';
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
  useEffect(() => {
    getData(setUserData);
    return () => {
      http.source.cancel('request stopped by user');
    };
  }, []);
  return (
    userData ? (
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    ) : <p>Loading</p>

  );
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
