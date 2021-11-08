import React from 'react';
import Book from '../components/libro';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';
import CityTable from '../components/dashBoardCities';

function Home() {
  return (
    <div>
      <Slider />
      <WhoAreWe />
      <Book />
      <CityTable />
    </div>
  );
}

export default Home;
