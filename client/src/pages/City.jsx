/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import StoryCard from '../components/common/StoryCard';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';

function City() {
  const [city, setCity] = useState();
  const [storiesOfCity, setStoriesOfCity] = useState([]);
  const [userRole, setUserRole] = useState();

  const userInfo = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { cityData, stories } = cityInfo;

  useEffect(() => {
    if (cityInfo) {
      setUserRole(userInfo);
      setCity(cityData);
      setStoriesOfCity(stories);
    }
  }, [cityInfo]);

  return (
    <>
      {storiesOfCity && storiesOfCity.length > 0
        && stories.map((story) => <StoryCard key={story.id} storyInfo={story} />)}
    </>
  );
}

export default City;
