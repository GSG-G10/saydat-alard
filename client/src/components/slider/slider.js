/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useState, useEffect } from 'react';

import { StackedCarousel } from 'react-stacked-carousel';
import style from 'react-stacked-carousel/dist/index.css';
import Card from '../common/CityCard/card';
import './styles.css';

function Slider() {
  // eslint-disable-next-line no-unused-vars
  const [cities, setCities] = useState([]);

  useEffect(async () => {
    const getMainCities = () => {
      const url = '/api/v1/';
      return axios.get(url);
    };

    const response = await getMainCities().catch((err) => {
      console.error(`Error in fetching cities ${err}`);
    });

    if (response) {
      const { data } = response;
      setCities(data);
      console.log('data', data);
    }
  }, []);

  return (

    <div>
      <StackedCarousel
        autoRotate={false}
        containerClassName={style.container}
        cardClassName={style.card}
        leftButton={<button type="button">Left</button>}
        rightButton={<button type="button">Right</button>}
        style={{height: '733px', width: '727px', margin: 'auto', marginTop: '9%'}}
      >
        {[
          {
            id: 1, name: "حيفا", area: 20, population: 10000, density: 540 
          },
        ].map((city) => (
          <Card key={city.id} title={city.name}>
            <p>المساحة: {city.area} كيلومتر مربع</p>
            <p>المساحة: {city.population} كيلومتر مربع</p>
            <p>المساحة: {city.density} كيلومتر مربع</p>
          </Card>
        ))}
        {/* <Card key="child2">
          <img src="https://static-s.aa-cdn.net/img/ios/1567853765/e9f7f75687c9c8bbdab601421363ab5e?v=1" alt="" />

        </Card>
        <Card key="child3">
          <img src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

        </Card>
        <Card key="child4">
          <img src="https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

        </Card>
        <Card key="child5">
          <img src="https://images.unsplash.com/photo-1542227844-5e56c7c2687d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

        </Card> */}

      </StackedCarousel>

    </div>
  );
}

export default Slider;
