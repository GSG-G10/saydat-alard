import React from 'react';
import HTMLFlipBook from 'react-pageflip';

function Bookcomponant() {
  return (
    <HTMLFlipBook width={300} height={500} style={{boxShadow:"0px "}}>
      <div className="demoPage" style={{ background: 'blue' }}>Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}

export default Bookcomponant;
