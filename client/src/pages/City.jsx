import React, { useContext } from 'react';
import StoryCard from '../components/common/Story';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';

function City() {
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { cityData, stories } = cityInfo;

  return (
    <div>
      {stories
    && stories.length
    && stories.map((story) => (
      <StoryCard key={story.id} storyInfo={story} userInfo={userData} />
    ))}
    </div>
  );
}

export default City;
