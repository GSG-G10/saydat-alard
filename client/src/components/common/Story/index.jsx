import React, { useState } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import Img from '../Img';
import './story.css';

const StoryCard = ({ storyInfo, userInfo, handleClick }) => {
  const [coverClass, setCoverClass] = useState('card-cover deactive-hover');

  const hoverHandler = () => {
    if (userInfo === storyInfo.user_id) {
      setCoverClass('card-cover active-hover');
    }
  };

  const nonHoverHandler = () => {
    setCoverClass('card-cover deactive-hover');
  };

  return (
    <div className="card-story">
      <Card
        className="card-component"
        hoverable
        onMouseOver={hoverHandler}
        onMouseOut={nonHoverHandler}
        onClick={() => { handleClick(storyInfo.id); }}
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
              src="https://www.aljazeera.net/wp-content/uploads/2021/04/12fg56.jpg?resize=770%2C513"
              alt={storyInfo.title}
              styleClass="card-img"
            />
          </div>
        )}

      />
    </div>
  );
};
StoryCard.propTypes = {
  userInfo: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
  storyInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
StoryCard.defaultProps = {
  userInfo: 0,

};
export default StoryCard;
