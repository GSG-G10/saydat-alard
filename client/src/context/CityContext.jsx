import React, { createContext, useState, useEffect } from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import http from '../services/httpService';
import { apiEndPoint } from '../services/config.json';

export const CityContext = createContext();
function CityProvider({ children }) {
  const id = useLocation().pathname.split('/')[2];

  const [cityData, setCityData] = useState({});
  useEffect(() => {
    const getCityData = async () => {
      try {
        const { data } = await http.get(`${apiEndPoint}/city/${id}`, {
          canelToken: http.source.token,
        });
        setCityData(data);
      } catch (error) {
        if (error.status >= 400 && error.status <= 500) {
          message.error(error.message);
        }
      }
      return () => {
        http.source.cancel('request stopped by user');
      };
    };
    getCityData();
  }, []);

  return (
    <CityContext.Provider value={{ cityData }}>{children}</CityContext.Provider>
  );
}
CityProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CityProvider;
