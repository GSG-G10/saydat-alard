import React from 'react';
import Book from '../components/libro';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';
import SearchCity from '../components/common/Search';
import ScrollSpy from '../components/common/ScrollSpy/ScrollSpy';
import Footer from '../components/common/Footer';

function Home() {
  return (
    <div>
      <ScrollSpy eleOfList={['بلادنا', 'من نحن', 'الأمثال الشعبية ']} />
      <SearchCity />
      <Slider />
      <WhoAreWe />
      <Book />
      <Footer />
    </div>
  );
}

export default Home;
