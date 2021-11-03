import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import pic from './image/pic.jpg';
import './style.css';

function StoryModal({
  visible, setVisible, text, userName,
}) {
  return (
    <Modal
      title="محتوى هذه القصة"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      footer={null}
      width={800}
      style={{ borderRadius: '50px' }}
    >
      <div className="storyModal">
        <div>
          <p className="text">{text}</p>
          <p className="userName">
            -
            {userName}
          </p>
        </div>
        <div><img className="storyPic" src={pic} alt="صورة" /></div>
      </div>
    </Modal>
  );
}
StoryModal.propTypes = {
  visible: PropTypes.string.isRequired,
  setVisible: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,

};

export default StoryModal;
