// import React, { useState, useEffect } from 'react';

// import { StackedCarousel } from 'react-stacked-carousel';
// import style from 'react-stacked-carousel/dist/index.css';
// import http from '../../services/httpService';

// // function Slider() {
// //   const [cities, setCities] = useState([]);

// //   const getMainCities = () => {
// //     const url = '/api/v1/';
// //     return http
// //       .get(url)
// //       .then((response) => response)
// //       .catch((err) => {
// //         throw new Error(`Error in fetching products ${err}`);
// //       });
// //   };
// //   useEffect(() => {
// //     getMainCities()
// //       .then((response) => {
// //         if (response) {
// //           const { data } = response;
// //           setCities(data.data.cities);
// //         }
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <StackedCarousel
// //         autoRotate={false}
// //         containerClassName={style.container}
// //         cardClassName={style.card}
// //         leftButton={<button type="button">Left</button>}
// //         rightButton={<button type="button">Right</button>}
// //         style={{
// //           borderRadius: '50px',
// //           height: '733px',
// //           width: '727px',
// //           margin: 'auto',
// //           marginTop: '9%',
// //         }}
// //       >
// //         {cities.map((city) => (
// //           <Card key={city.id} title={city.name}>
// //             <p>
// //               المساحة:
// //               {' '}
// //               {city.area}
// //               {' '}
// //               كيلومتر مربع
// //             </p>
// //             <p>
// //               الموقع:
// //               {' '}
// //               {city.location}
// //               {' '}
// //             </p>
// //           </Card>
// //         ))}
// //       </StackedCarousel>
// //     </div>
// //   );
// // }

// export default Slider;

import React, {  useState } from 'react';
import { StackedCarousel } from 'react-stacked-carousel';
import Card from '../common/CityCard/card';
import 'react-stacked-carousel/dist/index.css';
import './styles.css';

const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log('Card', event);
  };

  return (
    <div className="main">
      <StackedCarousel
        autoRotate
        onCardChange={onCardChange}
        containerClassName="container"
        cardClassName="card"
        rotationInterval="3000"
      >
        <div key="child1" className="card-green" />
        <div key="child2 " className="card-green" />
        <div key="child3" className="card-green" />
        <div key="child4" className="card-green" />
      </StackedCarousel>
    </div>
  );
};
export default App;
