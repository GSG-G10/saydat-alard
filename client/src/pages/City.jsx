import React, { useContext } from 'react';
import StoryCard from '../components/common/Story/StoryCard';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';

function City() {
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { cityData, stories } = cityInfo;

  return (
    <>
      {stories
    && stories.length
    && stories.map((story) => (
      <StoryCard key={story.id} storyInfo={story} userInfo={userData} />
    ))}
    </>
  );
}

export default City;
