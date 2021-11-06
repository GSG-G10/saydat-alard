import React from 'react';
import PropTypes from 'prop-types';
import Img from './common/Img';
import HeaderTitle from './common/Title';
import './city.css';

function BackgroundImg(props) {
  const {
    img, quotation, cityName,
  } = props;
  return (
    <div className="background-img-section">
      <Img styleClass="background-img" src={img} alt={`${cityName}img`} />
      <HeaderTitle text={quotation} strong className="quotation" level={1} />
      <HeaderTitle text={cityName} strong className="cityName" level={1} />
    </div>
  );
}
BackgroundImg.propTypes = {
  img: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
};
export default BackgroundImg;
