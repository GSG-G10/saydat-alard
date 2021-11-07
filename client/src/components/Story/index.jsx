import React from 'react';
import { Modal, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

function StoryModal({ visible, storyInfo, handleVisible }) {
  const push = useHistory();
  const {
    image, content, name, title,
  } = storyInfo;

  return (
    <Modal
      centered
      visible={visible}
      title={title}
      onOk={() => handleVisible(false)}
      onCancel={() => handleVisible(false)}
      footer={null}
      width={750}
    >
      {storyInfo ? (

        <div className="storyModal">

          <div className="content-container">
            <p className="text">{content}</p>
            <p className="userName">{name}</p>
          </div>

          <div className="image-container">
            <img className="storyPic" src="https://lh3.googleusercontent.com/proxy/s2SFcqiZan3MrHkwP25078ktEvbc1JLV3TAtKu1iclu6ePqEWQIzeCatVeKQ-ciMde7ORZ5oOYa57U9HkjHOBxRuPepoig9QwZwU9s1DRr1Sew" alt={`${name} صورة من `} />
          </div>

        </div>
      ) : <Spin />}
    </Modal>
  );
}
StoryModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
  storyInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoryModal;
