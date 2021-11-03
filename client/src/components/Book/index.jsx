import {
  React, useEffect, useState, useRef,
} from 'react';
import HTMLFlipBook from 'react-pageflip';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import http from '../../services/httpService';
import Page from './Page';

function Book() {
  const [proverbs, setProverbs] = useState([]);
  const getProverbs = async () => {
    try {
      const proverbsData = await http.get('api/v1/proverbs?char=ا&page=1');
      if (proverbsData.data.proverbs.length) {
        setProverbs(proverbsData.data.proverbs);
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
  const book = useRef();
  const nextButtonClick = () => {
    book.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBook.getPageFlip().flipPrev();
  };

  return (
    <div className="">
      { // eslint-disable-next-line jsx-a11y/click-events-have-key-events
}
      <div onClick={nextButtonClick}>
        <RightCircleOutlined />
      </div>
      <HTMLFlipBook
        width={300}
        height={500}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        style={{
          boxShadow: '0px 0px 20px 5px', margin: '100px auto',
        }}
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
      <div><LeftCircleOutlined /></div>
    </div>
  );
}

export default Book;
