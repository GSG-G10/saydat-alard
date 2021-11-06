import React from 'react';
import Book from '../components/Book';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';

function Home() {
  return (
    <div>
      <Slider />
      <WhoAreWe />
      <Book />
    </div>
  );
}

export default Home;
