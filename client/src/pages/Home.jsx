import React from 'react';
import NavBar from '../components/common/NavBar';
import Book from '../components/libro';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';

function Home() {
  return (
    <div>
      <NavBar />
      <WhoAreWe />
      <Slider />
      <WhoAreWe />
      <Book />
    </div>
  );
}

export default Home;
