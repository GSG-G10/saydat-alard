import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Paragraph } = Typography;

const ParagraphText = ({ text, strong }) => (
  <Paragraph strong={strong}>{text}</Paragraph>
);

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
  strong: PropTypes.bool.isRequired,
};

export default ParagraphText;
