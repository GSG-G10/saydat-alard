import React, { useState } from 'react';
import { Button } from 'antd';
import StoryModal from '../components/Story/StoryModal';

function City() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <StoryModal visible={visible} setVisible={setVisible} text="هي اليوم مدينة صغيرة وفقيرة ومهمّشة، لا يتجاوز عدد سكانها 50 ألف نسمة، ثلثهم من العرب، وهي مقسّمة إلى أربعة أحياء أساسيّة: حيّ عكا القديمة، حيّ عكا الانتدابيّة - مركز المدينة (حي الرشاديّة)، الحيّ الشماليّ والحيّ الشرقيّ. وجميع سكان عكا القديمة من العرب الفلسطينيّين/ أما الحيّ الشرقيّ فجميع سكانه، تقريبًا، من اليهود. " userName="نادية التميمي" />
    </div>
  );
}

export default City;
