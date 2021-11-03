import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Page = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="demoPage" ref={ref}>
      <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        صفحة رقم
        {' '}
        {props.number}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{props.proverbs}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }} className="page-footer">{props.number}</div>
    </div>
  );
});
Page.propTypes = {
  proverbs: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,

};
export default Page;
