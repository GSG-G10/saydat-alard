import React from 'react';
import './whoAreWe.css';
import Img from '../../common/Img';
import Title from '../../common/Title';
import Paragraph from '../../common/Paragraph';

const WhoAreWe = () => (
  <div className="section-waw">
    <Img src="map.jpg" alt="map Of Palestine" styleClass="image-palestine" />
    <div className="content-waw">
      <Title text="من نحن" level={1} titleClass="title-waw" />
      <Paragraph
        paragraphClass="summary-waw"
        text="الأرض الأولى هي الأم الأولى، هي الحب الأول، هي أيضا الأغنية التي ما أن ترافق ولادة أبنائها حتى تصبح صورة حقيقية لوجه تلك الأرض، فلو ذهبت الأرض تبقى الأغنية، وأغنية فلسطين اليوم هي الأرض الموعودة"
        strong
      />
    </div>
  </div>
);

export default WhoAreWe;
