import React, { useState, useContext } from 'react';
import { Button } from 'antd';
import UploadStoryForm from '../components/uploadStoryForm';
import StoryCard from '../components/common/Story';
import { AuthContext } from '../context/AuthContext';
import { CityContext } from '../context/CityContext';
import StoryModal from '../components/Story';

function City() {
  const [visible, setVisible] = useState(false);
  const [addStoryVisible, setAddStoryVisible] = useState(false);
  const { userData } = useContext(AuthContext);
  const { cityData: cityInfo } = useContext(CityContext);
  const { stories } = cityInfo;

  return (
    <div>
      <div>
        <Button type="primary" onClick={() => setVisible(true)}>
          Open Modal of 1000px width
        </Button>
        <StoryModal
          visible={visible}
          setVisible={setVisible}
          text="هي اليوم مدينة صغيرة وفقيرة ومهمّشة، لا يتجاوز عدد سكانها 50 ألف نسمة، ثلثهم من العرب، وهي مقسّمة إلى أربعة أحياء أساسيّة: حيّ عكا القديمة، حيّ عكا الانتدابيّة - مركز المدينة (حي الرشاديّة)، الحيّ الشماليّ والحيّ الشرقيّ. وجميع سكان عكا القديمة من العرب الفلسطينيّين/ أما الحيّ الشرقيّ فجميع سكانه، تقريبًا، من اليهود. "
          userName="نادية التميمي"
        />
      </div>
      {stories?.length && stories.map((story) => (
        <StoryCard key={story.id} storyInfo={story} userInfo={userData.id} />
      ))}
      <Button type="primary" onClick={() => setVisible(true)}>
        أضف قصتك
      </Button>
      <UploadStoryForm visible={addStoryVisible} setVisible={setAddStoryVisible} />
    </div>
  );
}

export default City;
