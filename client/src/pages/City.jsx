import React, { useState } from 'react';
import { Button } from 'antd';
import UploadStoryForm from '../components/uploadStoryForm';

function City() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        أضف قصتك
      </Button>
      <UploadStoryForm visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default City;
