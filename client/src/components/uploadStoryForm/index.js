import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Upload from './imageInput';

const StoryForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} Style={{ color: '@primary' }}>
        أضف قصتك
      </Button>
      <Modal
        title="اضف قصتك"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <Upload />
      </Modal>
    </>
  );
};

export default StoryForm;
