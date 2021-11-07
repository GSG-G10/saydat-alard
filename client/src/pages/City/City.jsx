import React, { useContext } from 'react';
import BackgroundImg from '../../components/BackgroundImg';
import StoryCard from '../../components/common/Story';
import { AuthContext } from '../../context/AuthContext';
import { CityContext } from '../../context/CityContext';
import CityInformation from './CityInformation';
import ScrollSpy from '../../components/common/ScrollSpy';
import Search from '../../components/common/search';
import HeaderTitle from '../../components/common/Title';
import Footer from '../../components/common/Footer';

function City() {
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { stories, cityData } = cityInfo;

  return (
    <div className="city-page">
      <ScrollSpy eleOfList={['عن المدينة', 'قصص']} />

      <Search />

      <BackgroundImg
        img="https://www.alquds.co.uk/wp-content/uploads/2021/09/20210910112926afpp-afp_9mk4vg.h-730x438.jpg"
        quotation="أجمل المدن القديمة و أقدم المدن الجميلة "
        cityName="عكاا"
      />

      <div id="section-0" className="section-info">
        <CityInformation cityData={cityData} />
      </div>

      <div id="section-1" className="section-stories">
        <HeaderTitle text="القصص" level={1} className="stories-title" />
        {stories?.length
          && stories.map((story) => (
            <StoryCard
              key={story.id}
              storyInfo={story}
              userInfo={userData.id}
            />
          ))}
      </div>

      <Footer />

    </div>

  );
}

export default City;
