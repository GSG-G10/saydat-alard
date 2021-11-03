import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import httpService from '../services/httpService';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await httpService.get('/userinfo');
      setUserData(data);
    };
    getData();
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
