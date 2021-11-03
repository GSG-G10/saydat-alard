/* eslint-disable */
import { Card as CardComp } from 'antd';

import React from 'react';

function Card({ title, children }) {
  return (
      <div className="site-card-border-less-wrapper" >
        <CardComp title={title} bordered={false} >
            <div >
                <div >
                    {children}
                </div>
          </div>
        </CardComp>
      </div>
  );
}

export default Card;
