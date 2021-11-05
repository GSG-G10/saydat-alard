import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import httpService from '../services/httpService';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getData = async () => {
<<<<<<< HEAD
      const data = await httpService.get('/api/v1/userinfo');
=======
      const { data } = await httpService.get('/api/v1/userinfo');
>>>>>>> f4ff4f7975d28a77514a309c305667eb4ed129d4
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
