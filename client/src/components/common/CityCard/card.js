import { Card as CardComp } from 'antd';

import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Card({ title, children, className }) {
  return (
    <div className={`site-card-border-less-wrapper card-green ${className}`}>
      <CardComp
        title={title}
        bordered={false}
        headStyle={{
          textAlign: 'center',
          fontSize: '50px',
          borderWidth: 0,
          paddingTop: '65px',
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'auto',
          height: '100%',
          borderRadius: '100px',
        }}
        bodyStyle={{ margin: 'auto' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            dir="rtl"
            style={{
              height: '50%',
              borderRadius: '100px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </div>
        </div>
      </CardComp>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};

export default Card;
