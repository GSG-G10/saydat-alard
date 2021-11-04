import React, { useState } from 'react';
import FlippingPages from 'flipping-pages';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

/* IMPORTANT */
import 'flipping-pages/FlippingPages.css';

import './libro.css';

function Libro({ totalPages = 10 }) {
  const [selected, setSelected] = useState(0);

  const handleSelectedChange = (select) => {
    setSelected(select);
  };

  const previous = () => {
    setSelected((state) => state - 1);
  };

  const next = () => {
    setSelected((state) => state + 1);
  };

  return (
    <div className="App">
      <div onClick={next}
        disabled={selected + 1 === totalPages}>
        <RightCircleOutlined />
      </div>
      <FlippingPages
        className="App-pages"
        direction="horizontal"
        selected={selected}
        onSelectedChange={handleSelectedChange}
        touch-action="none"
        reverse={true}
      >
        <div className="App-page App-page_red rigth-left"><div className="rigth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolorum quos itaque voluptatibus dicta rerum reiciendis possimus? Dolore temporibus quis tenetur iste officiis </div><div className="left">voluptate odio modi consequatur? Vitae, in ad.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et optio quidem quia, est atque perferendis quo beatae. Labore earum neque soluta veritatis? Id ea dolorem obcaecati sint, molestias dignissimos consequuntur?</div></div>
        <div className="App-page App-page_green">1</div>
        <div className="App-page App-page_blue">2</div>
        <div className="App-page App-page_orange">3</div>
        <div className="App-page App-page_orange">4</div>
        <div className="App-page App-page_orange">5</div>
        <div className="App-page App-page_orange">6</div>
        <div className="App-page App-page_orange">7</div>
        <div className="App-page App-page_orange">8</div>
        <div className="App-page App-page_orange">9</div>
        <div className="App-page App-page_orange">10</div>
      </FlippingPages>
      {/* Buttons are required for keyboard navigation */}

      <div onClick={previous}
          disabled={selected === 0}>
          <LeftCircleOutlined />
      </div>
      </div>
  );
}

export default Libro;
