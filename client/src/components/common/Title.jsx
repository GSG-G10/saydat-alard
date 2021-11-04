import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const HeaderTitle = ({ text, level, className }) => (
  <Title level={level} className={className}>{text}</Title>
);

HeaderTitle.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default HeaderTitle;
