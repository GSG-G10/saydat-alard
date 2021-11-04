/* eslint-disable */
import { Card as CardComp } from 'antd';

import React from 'react';
import './style.css';

function Card({ title, children }) {
  return (
      <div className="site-card-border-less-wrapper card-green">
        <CardComp title={title} bordered={false} headStyle={{textAlign: 'center', fontSize: '50px', borderWidth: 0, paddingTop:'100px'}} style={{display: 'flex', flexDirection: 'column',  alignItems: 'center', width: 'auto', height: '100%', borderRadius:'100px'}} bodyStyle={{margin: 'auto'}} >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div dir="rtl" style={{height: '50%',borderRadius: '100px'}}>
                    {children}
                </div>
          </div>
        </CardComp>
      </div>
  );
}

export default Card;
