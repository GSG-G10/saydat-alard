import React from 'react';
import PropTypes from 'prop-types';

const Img = ({
  src, alt, styleClass, style,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={styleClass}
    style={style}
  />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
  style: PropTypes.isRequired,
};
export default Img;
