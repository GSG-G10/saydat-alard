import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const headerTitle = ({ text, level, titleClass }) => (
  <Title level={level} className={titleClass}>{text}</Title>
);

headerTitle.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  titleClass: PropTypes.number.isRequired,
};

export default headerTitle;
