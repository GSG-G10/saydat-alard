import React, { useState, useEffect } from 'react';

import { StackedCarousel } from 'react-stacked-carousel';
import style from 'react-stacked-carousel/dist/index.css';
import http from '../../services/httpService';
import Card from '../common/CityCard/card';
import './style.css';
import pic from './leaves.png';

function Slider() {
  // const [card, setCard] = useState(null);
  const [cities, setCities] = useState([]);

  const onCardChange = () => { };

  const getMainCities = () => {
    const url = '/api/v1/';
    return http
      .get(url)
      .then((response) => response)
      .catch((err) => {
        throw new Error(`Error in fetching products ${err}`);
      });
  };
  useEffect(() => {
    getMainCities()
      .then((response) => {
        if (response) {
          const { data } = response;
          setCities(data.data.cities);
        }
      });
  }, []);

  return (
    <div className="sliderDiv">
      <img src={pic} alt="dsfsdf" className="leavesImg" />
      <StackedCarousel
        autoRotate
        onCardChange={onCardChange}
        containerClassName={style.container}
        cardClassName={style.card}
        rotationInterval="3000"
        leftButton={<button type="button">{ '<' }</button>}
        rightButton={<button type="button">{ '>' }</button>}
        style={{
          borderRadius: '10px',
          height: '400px',
          width: '400px',
          margin: 'auto',
          marginTop: '10%',
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
              الموقع:
              {' '}
              {city.location}
              {' '}
            </p>
          </Card>
        ))}
      </StackedCarousel>
    </div>
  );
}

export default Slider;
