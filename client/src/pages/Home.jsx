import React from 'react';
import NavBar from '../components/common/NavBar';
import Book from '../components/libro';
import WhoAreWe from '../components/sections/whoAreWe/index';
import Slider from '../components/slider';
import ScrollSpy from '../components/common/ScrollSpy';
import Footer from '../components/common/Footer';
import Search from '../components/common/search';

function Home() {
  return (
    <div>
      <NavBar />
      <Search />
      <ScrollSpy eleOfList={['بلادنا', 'من نحن', 'الأمثال الشعبية ']} />
      <Slider />
      <WhoAreWe />
      <Book />
      <Footer />
    </div>
  );
}

export default Home;
