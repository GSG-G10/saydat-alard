import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Paragraph } = Typography;

const ParagraphText = ({ text, strong, paragraphClass }) => (
  <Paragraph strong={strong} className={paragraphClass}>{text}</Paragraph>
);

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
  strong: PropTypes.bool.isRequired,
  paragraphClass: PropTypes.string.isRequired,
};

export default ParagraphText;
