import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Paragraph } = Typography;

const ParagraphText = ({ text }) => (
  <Paragraph>{text}</Paragraph>
);

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ParagraphText;
