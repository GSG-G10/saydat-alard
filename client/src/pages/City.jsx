import React, { useContext } from 'react';
import StoryCard from '../components/common/Story';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';

function City() {
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { stories } = cityInfo;
  return (
    <div>
      {stories?.length && stories.map((story) => (
        <StoryCard key={story.id} storyInfo={story} userInfo={userData.id} />
      ))}
    </div>
  );
}

export default City;
