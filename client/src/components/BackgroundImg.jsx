import React from 'react';
import PropTypes from 'prop-types';
import Img from './common/Img';
import ParagraphText from './common/Paragraph';
import HeaderTitle from './common/Title';
import './city.css';

function BackgroundImg(props) {
  const {
    img, quotation, cityName,
  } = props;
  return (
    <div className="background-img-section">
      <Img styleClass="background-img" src={img} alt={`${cityName}img`} />
      <ParagraphText text={quotation} strong className="quotation" />
      <HeaderTitle text={cityName} strong className="cityname" level={1} />
    </div>
  );
}
BackgroundImg.propTypes = {
  img: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
};
export default BackgroundImg;
