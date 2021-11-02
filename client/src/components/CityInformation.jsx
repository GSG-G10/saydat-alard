/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import httpService from '../services/httpService';
import Img from './common/Img';
import ParagraphText from './common/Paragraph';
import './city.css';

function CityInformation({ id }) {
  const [cityInfo, setcityInfo] = useState({});
  const [families, setfamilies] = useState([]);
  useEffect(() => {
    const getCityData = async () => {
      const cityInformation = await httpService.get(`/city/${id}`);
      const cityFamilies = await httpService.get(`/families/${id}`);
      const { data } = cityInformation;
      const { cityData } = data;
      setcityInfo(cityData);
      setfamilies(cityFamilies);
      console.log(cityFamilies.data);
    };
    getCityData();
  }, []);

  return (
    <div className="city-info-container">

      <Img
        src="/tree1.jpg"
        alt="tree-design"
        styleClass="tree"
        style={{
          position: 'absolute',
          top: '60px',
          right: '30px',
        }}
      />
      <Img
        src="/tree.png"
        alt="tree-design"
        styleClass="tree"
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '30px',
        }}
      />
      <div className="city-information-section">
        <ParagraphText text={`المساحة ${cityInfo.area} كم `} strong={false} />
        <ParagraphText text={`الموقع ${cityInfo.location}  `} strong={false} />
        <ParagraphText text=" تشتهر ب الصناعة و التجارة " strong={false} />
        <ParagraphText text="العائلات الفلسطينية في هذه القرية / المدينة " strong={false} />
        <div className="families">
          <ul />
        </div>
      </div>
    </div>
  );
}
CityInformation.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CityInformation;
