import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import 'antd/dist/antd.min.css';

const StoryCard = ({ storyInfo }) => {
  console.log(storyInfo);
  return (
    <>

      <Card />
    </>
  );
};
StoryCard.propTypes = {
  storyInfo: PropTypes.element.isRequired,
};
export default StoryCard;
