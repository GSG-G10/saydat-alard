import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import httpService from '../../services/httpService';
import Img from '../../components/common/Img';
import ParagraphText from '../../components/common/Paragraph';
import HeaderTitle from '../../components/common/Title';
import './city.css';
import tree from '../../utils/images/tree.png';
import tree1 from '../../utils/images/tree1.png';

function CityInformation(props) {
  const { cityData } = props;
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [families, setfamilies] = useState([]);
  useEffect(() => {
    const getCityData = async () => {
      const cityFamilies = await httpService.get(`/api/v1/families/${id}`);
      setfamilies(cityFamilies);
    };
    getCityData();
  }, []);

  return (
    <div className="city-info-container">

      <Img
        src={tree1}
        alt="tree-design"
        styleClass="tree"
      />
      <Img
        src={tree}
        alt="tree-design"
        styleClass="tree1"
      />
      <div className="city-information-section">
        {
        cityData

          ? (
            <>
              <ParagraphText text={`المساحة : ${cityData.area} كم `} strong={false} />
              <ParagraphText text={`الموقع  : ${cityData.location}  `} strong={false} />
              <ParagraphText text=" تشتهر ب  : الصناعة و التجارة " strong={false} />
              <ParagraphText text="العائلات الفلسطينية في هذه القرية / المدينة " strong={false} />
              <div className="families">
                <ul />
              </div>
            </>
          )
          : (
            <div className="no-data">
              <HeaderTitle text="يتم العمل على إضافة معلومات عن هذه المدينة /القرية يمكنك المساهمة بإرسال المعلومات على هذا البريد الإلكتروني " level={3} />
              <HeaderTitle text="saydat.alard@gmail.com" level={4} />
            </div>
          )
      }
      </div>
    </div>
  );
}
CityInformation.propTypes = {
  cityData: PropTypes.shape({
    area: PropTypes.string.isRequired,
    location: PropTypes.number.isRequired,
  }).isRequired,
};

export default CityInformation;
