import React from 'react';
import NavBar from '../components/common/NavBar';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';

function Home() {
  return (
    <div>
      <NavBar />
      <WhoAreWe />
      <Slider />
    </div>
  );
}

export default Home;
