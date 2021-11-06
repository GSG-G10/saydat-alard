import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import httpService from '../../services/httpService';
import Img from '../../components/common/Img';
import ParagraphText from '../../components/common/Paragraph';
import HeaderTitle from '../../components/common/Title';
import './city.css';

function CityInformation() {
  const { id } = useParams();
  const [cityInfo, setcityInfo] = useState({});
  const [families, setfamilies] = useState([]);
  useEffect(() => {
    const getCityData = async () => {
      const cityInformation = await httpService.get(`/api/v1/city/${id}`);
      const cityFamilies = await httpService.get(`/api/v1/families/${id}`);
      const { cityData } = cityInformation.data.data;
      setcityInfo(cityData);
      setfamilies(cityFamilies);
    };
    getCityData();
  }, []);

  return (
    <div className="city-info-container">

      <Img
        src="./tree1.png"
        alt="tree-design"
        styleClass="tree"
      />
      <Img
        src="/tree.png"
        alt="tree-design"
        styleClass="tree1"
      />
      <div className="city-information-section">
        {
        cityInfo

          ? (
            <>
              <ParagraphText text={`المساحة : ${cityInfo.area} كم `} strong={false} />
              <ParagraphText text={`الموقع  : ${cityInfo.location}  `} strong={false} />
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

export default CityInformation;
