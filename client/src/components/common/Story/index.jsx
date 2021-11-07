import React, { useState } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import StoryModal from '../../Story';
import Img from '../Img';
import './story.css';

const StoryCard = ({ storyInfo, userInfo }) => {
  const [coverClass, setCoverClass] = useState('card-cover deactive-hover');
  const [visible, setVisible] = useState(false);

  const hoverHandler = () => {
    if (userInfo === storyInfo.user_id) {
      setCoverClass('card-cover active-hover');
    }
  };

  const nonHoverHandler = () => {
    setCoverClass('card-cover deactive-hover');
  };

  return (
    <div>

      <div className="stories">
        <StoryModal
          visible={visible}
          storyInfo={storyInfo}
          handleVisible={setVisible}
        />
      </div>
      <div className="card-story">
        <Card
          className="card-component"
          hoverable
          onMouseOver={hoverHandler}
          onMouseOut={nonHoverHandler}
          onClick={() => { setVisible(true); }}
          cover={(
            <div className="card-container">
              <div
                className={coverClass}
              >
                <div className="actions">
                  <EditOutlined />
                  <DeleteOutlined />
                </div>
              </div>
              <Img
                src={storyInfo.image}
                alt={storyInfo.title}
                styleClass="card-img"
              />
            </div>
        )}
        />
      </div>
    </div>
  );
};
StoryCard.propTypes = {
  userInfo: PropTypes.number,
  storyInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
StoryCard.defaultProps = {
  userInfo: 0,

};
export default StoryCard;
