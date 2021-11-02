import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const HeaderTitle = ({ text, level }) => (
  <Title level={level}>{text}</Title>
);

HeaderTitle.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default HeaderTitle;
