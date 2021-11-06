import React, { useContext } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './style.css';
import { CityContext } from '../../context/CityContext';

function StoryModal({ visible, handleVisible }) {
  const { cityData: cityInfo } = useContext(CityContext);
  const { stories } = cityInfo;
  const visibleStory = stories?.filter((ele) => ele.id === visible);
  if (visibleStory?.length) {
    const {
      id, image, content, name, title, user_id,
    } = visibleStory[0];

    return (
      <Modal
        centered
        visible={visible}
        onOk={() => handleVisible(0)}
        onCancel={() => handleVisible(0)}
        footer={null}
        width={750}
      >
        <div className="storyModal">

          <div className="content-container">
            <p className="text">{content}</p>
            <p className="userName">{name}</p>
          </div>

          <div className="image-container">
            <img className="storyPic" src="https://lh3.googleusercontent.com/proxy/s2SFcqiZan3MrHkwP25078ktEvbc1JLV3TAtKu1iclu6ePqEWQIzeCatVeKQ-ciMde7ORZ5oOYa57U9HkjHOBxRuPepoig9QwZwU9s1DRr1Sew" alt={`${name} صورة من `} />
          </div>

        </div>
      </Modal>
    );
  }
  return null;
}
StoryModal.propTypes = {
  visible: PropTypes.number.isRequired,
  handleVisible: PropTypes.func.isRequired,
};

export default StoryModal;
