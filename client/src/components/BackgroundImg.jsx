import React from 'react';
import PropTypes from 'prop-types';
import Img from './common/Img';
import ParagraphText from './common/Paragraph';
import './city.css';

function BackgroundImg(props) {
  const {
    img, quotation, cityName,
  } = props;
  return (
    <div className="backgroundImg" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <ParagraphText text={quotation} strong />
      <ParagraphText text={cityName} strong />
    </div>
  );
}
BackgroundImg.propTypes = {
  img: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
};
export default BackgroundImg;
