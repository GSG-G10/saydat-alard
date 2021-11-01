import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useState, useEffect } from 'react';

import { StackedCarousel } from 'react-stacked-carousel';
import style from 'react-stacked-carousel/dist/index.css';
import './styles.css';

function Slider() {
  // eslint-disable-next-line no-unused-vars
  const [cities, setCities] = useState([]);

  const getMainCities = () => {
    const url = '/api/v1/';
    return axios.get(url)
      .then((response) => response)
      .catch((err) => {
        throw new Error(`Error in fetching cities ${err}`);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    console.log('hi');
    getMainCities()
      .then((response) => {
        if (response) {
          const { data } = response;
          setCities(data);
          console.log('data', data);
        }
      }).catch((err) => console.log('errrrrrrrrrrrrrrror', err));

    return () => {
      controller.abort();
    };
  }, []);

  return (

    <div>
      <StackedCarousel
        autoRotate={false}
        containerClassName={style.container}
        cardClassName={style.card}
        leftButton={<button type="button">Left</button>}
        rightButton={<button type="button">Right</button>}
      >
        <div key="child1">

          <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />

        </div>
        <div key="child2">
          <img src="https://static-s.aa-cdn.net/img/ios/1567853765/e9f7f75687c9c8bbdab601421363ab5e?v=1" alt="" />

        </div>
        <div key="child3">
          <img src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

        </div>
        <div key="child4">
          <img src="https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

        </div>
        <div key="child5">
          <img src="https://images.unsplash.com/photo-1542227844-5e56c7c2687d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

        </div>

      </StackedCarousel>

    </div>
  );
}

export default Slider;
