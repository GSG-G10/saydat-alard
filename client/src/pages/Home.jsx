import React from 'react';
import NavBar from '../components/common/NavBar';
import Book from '../components/libro';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';
import SearchCity from '../components/common/search';
import ScrollSpy from '../components/common/ScrollSpy';
import Footer from '../components/common/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <ScrollSpy eleOfList={['بلادنا', 'من نحن', 'الأمثال الشعبية ']} />
      <SearchCity />
      <Slider />
      <WhoAreWe />
      <Book />
      <Footer />
    </>
  );
}

export default Home;
