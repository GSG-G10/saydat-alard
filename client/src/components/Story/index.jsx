import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

function StoryModal({
  visible, setVisible, text, userName, photo,
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
        <div><img className="storyPic" src={photo} alt={`${userName} صورة من `} /></div>
      </div>
    </Modal>
  );
}
StoryModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,

};

export default StoryModal;
