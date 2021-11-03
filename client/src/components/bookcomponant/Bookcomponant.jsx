import {
  React, useEffect, useState,
} from 'react';
import HTMLFlipBook from 'react-pageflip';
import http from '../../services/httpService';
import Page from './Page';

function Bookcomponant() {
  const [proverbs, setProverbs] = useState([]);
  const getProverbs = async () => {
    try {
      const proverbsData = await http.get('api/v1/proverbs?char=ا&page=1');
      if (proverbsData.data.data.proverbs.length) {
        setProverbs(proverbsData.data.data.proverbs);
      } else {
        throw new Error(' لا توجد أمثال تبدأ بهذا الحرف');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProverbs();
  }, []);

  return (

    // <div>Hi</div>
    <HTMLFlipBook
      width={300}
      height={500}
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      style={{
        boxShadow: '0px 0px 20px 5px', margin: '100px auto', transform: 'rotate(180deg)',
      }}
      // className="demo-book"
    >
      {/* <PageCover>كتــــاب الأمثال الشعبية </PageCover> */}
      {proverbs.length && (
        proverbs.map((proverb) => (

          <Page
            number={proverb.id}
            proverbs={proverb.content}
            key={proverb.id}
          />

        ))

      ) }
      {/* <PageCover>النهاية</PageCover> */}
    </HTMLFlipBook>
  );
}

export default Bookcomponant;
