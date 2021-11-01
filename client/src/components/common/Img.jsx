import React from 'react';
import PropTypes from 'prop-types';

const Img = ({
  src, alt, styleClass,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={styleClass}
  />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
};
export default Img;
