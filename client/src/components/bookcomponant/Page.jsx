import React from 'react';
import PropTypes from 'prop-types';

const Page = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: { oldpage } }} className="demoPage" ref={ref}>
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
// import React from 'react';
// import PropTypes from 'prop-types';

// const Page = React.forwardRef(({ proverbs, number }, ref) => (
//   <div className="demoPage" ref={ref}>
//     <h1>Page Header</h1>
//     <p>{proverbs}</p>
//     <div className="page-footer">{number}</div>
//   </div>
// ));
// Page.propTypes = {
//   proverbs: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,

// };
// export default Page;
