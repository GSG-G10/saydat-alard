import React from 'react';
import BackgroundImg from '../components/BackgroundImg';
import ScrollSpy from '../components/common/ScrollSpy/ScrollSpy';

function City() {
  return (
    <>
      <ScrollSpy />

      <BackgroundImg
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpHCGUepyja_eF2w1T-F40NtrU_XGTtznIw&usqp=CAU"
        quotation="أجمل المدن القديمة و أقدم المدن الجميلة "
        cityName="عكاا"
      />
    </>
  );
}

export default City;
