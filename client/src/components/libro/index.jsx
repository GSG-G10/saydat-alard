import React, { useState, useEffect } from 'react';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import FlippingPages from 'flipping-pages';
import http from '../../services/httpService';
import 'flipping-pages/FlippingPages.css';
import './libro.css';

function Libro() {
  const [proverbs, setProverbs] = useState([]);
  const [selected, setSelected] = useState(0);
  const totalPages = proverbs.length ? Math.ceil(proverbs.length / 10) : 1;

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

  const handleSelectedChange = (select) => {
    setSelected(select);
  };

  const previous = () => {
    setSelected((state) => state - 1);
  };

  const next = () => {
    setSelected((state) => state + 1);
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (

    <div className="App">
      <button
        className="btn"
        type="button"
        onClick={next}
        disabled={selected + 1 === totalPages}
      >
        <RightCircleOutlined />
      </button>
      <div>
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={selected}
          onSelectedChange={handleSelectedChange}
          touch-action="none"
          reverse
        >
          {proverbs.length > 0
            ? numbers.map((ele, i) => ((ele <= totalPages)
              ? (
                <div key={ele} className={proverbs.length <= 5 ? 'cont' : 'container'}>
                  <h3>الأمثـــــــال الشعبــيــة</h3>
                  <div className={proverbs.length <= 5 ? 'pro' : 'proverbs'}>
                    {proverbs.map((element, index) => ((index < ele * 10 && i * 10 <= index) ? <p key={element.id}>{element.content}</p> : ''))}
                  </div>
                </div>
              ) : '')) : <p>لا توجد أمثال</p>}
        </FlippingPages>
      </div>
      <button
        className="btn"
        type="button"
        onClick={previous}
        disabled={selected === 0}
      >
        <LeftCircleOutlined />
      </button>
    </div>
  );
}

export default Libro;
