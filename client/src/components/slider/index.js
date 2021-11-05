import React, { useState, useEffect } from 'react';

import { StackedCarousel } from 'react-stacked-carousel';
import { Link } from 'react-router-dom';
import 'react-stacked-carousel/dist/index.css';
import { Button, message } from 'antd';
import http from '../../services/httpService';
import Card from '../common/CityCard/card';
import './style.css';
import pic from './leaves.png';

function Slider() {
  const [cities, setCities] = useState([]);

  const getMainCities = async () => {
    const url = '/api/v1/';
    const response = await http
      .get(url)
      .catch((err) => {
        message.error(err.message);
      });
    return response;
  };
  useEffect(() => {
    getMainCities().then((response) => {
      if (response) {
        const { data } = response;
        if (data?.cities) {
          setCities(data.cities);
        }
      }
    });
  }, []);

  return (
    <div className="sliderDiv">
      <img src={pic} alt="background" className="leavesImg" />
      <StackedCarousel
        autoRotate
        containerClassName="carousel"
        cardClassName="card"
        rotationInterval="2000"
        leftButton={(
          <button className="left-button" type="button">
            {'<'}
          </button>
        )}
        rightButton={(
          <button className="right-button" type="button">
            {'>'}
          </button>
        )}
        style={{
          borderRadius: '10px',
          height: '400px',
          width: '400px',
          margin: 'auto',
        }}
      >
        {cities.map((city) => (
          <Card key={city.id} title={city.name}>
            <p>
              المساحة:
              {' '}
              {city.area}
              {' '}
              كيلومتر مربع
            </p>
            <p>
              {' '}
              الموقع:
              {' '}
              {city.location}
            </p>
            <Button type="button" className="cardButton" style={{ borderRadius: '50px' }}>
              <Link to={`/city/${city.id}`}>إقرأ المزيد</Link>
            </Button>
          </Card>
        ))}
      </StackedCarousel>
    </div>
  );
}

export default Slider;
