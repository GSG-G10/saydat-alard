import React from 'react';
import PropTypes from 'prop-types';
// import oldpage from './image/oldp.jpg';
import './style.css';

const Page = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div   className="book-page" ref={ref}>
      <h2 >
        صفحة رقم
        {' '}
        {props.number}
      </h2>
      <div >{props.proverbs}</div>
      <div  className="page-footer">{props.number}</div>
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
