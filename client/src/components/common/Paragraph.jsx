import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Paragraph } = Typography;

const ParagraphText = ({ text, strong, className }) => (
  <Paragraph strong={strong} className={className}>{text}</Paragraph>
);

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
  strong: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,

};

export default ParagraphText;
