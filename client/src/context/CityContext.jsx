import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import httpService from '../services/httpService';

export const CityContext = createContext();
function CityProvider({ children }) {
  const id = useLocation().pathname.split('/')[2];

  const [cityData, setCityData] = useState({});
  useEffect(() => {
    const getCityData = async () => {
      const { data } = await httpService.get(`/api/v1/city/${id}`);
      setCityData(data);
    };
    getCityData();
  }, []);

  return (
    <CityContext.Provider value={{ cityData }}>
      {children}
    </CityContext.Provider>
  );
}
CityProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CityProvider;
