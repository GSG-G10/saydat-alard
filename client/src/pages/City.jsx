import React, { useContext } from 'react';
import StoryCard from '../components/common/Story/StoryCard';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';

function City() {
  // const [city, setCity] = useState();
  // const [storiesOfCity, setStoriesOfCity] = useState([]);
  // const [userRole, setUserRole] = useState(null);

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
