import React, { useState } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import Img from '../Img';
import 'antd/dist/antd.min.css';
import './story.css';

const StoryCard = ({ storyInfo, userInfo }) => {
  const [coverClass, setCoverClass] = useState('card-cover deactive-hover');

  const hoverHandler = () => {
    if (userInfo.id === storyInfo.user_id) {
      setCoverClass('card-cover active-hover');
    }
  };

  const nonHoverHandler = () => {
    setCoverClass('card-cover deactive-hover');
  };

  return (
    <div className="card">
      <Card
        className="card-component"
        hoverable
        onMouseOver={hoverHandler}
        onMouseOut={nonHoverHandler}
        cover={(
          <>
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

          </>
        )}

      />
    </div>
  );
};
StoryCard.propTypes = {
  storyInfo: PropTypes.element.isRequired,
  userInfo: PropTypes.element.isRequired,
};
export default StoryCard;
