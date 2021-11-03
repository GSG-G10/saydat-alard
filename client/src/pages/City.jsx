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
  setUserRole(userInfo);

  const { cityData: cityInfo } = useContext(CityContext);
  const { cityData, stories } = cityInfo;
  setCity(cityData);
  setStoriesOfCity(stories);

  return (
    <>
      {storiesOfCity
        && storiesOfCity.length
        && storiesOfCity.map((story) => <StoryCard storyInfo={story} />)}
    </>
  );
}

export default City;
