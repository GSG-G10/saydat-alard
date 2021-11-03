import React from 'react';
import PropTypes from 'prop-types';

const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover" ref={ref} data-density="hard">
    <div className="page-content">
      <h2>{props.proverbs}</h2>
    </div>
  </div>
));
PageCover.propTypes = {
  proverbs: PropTypes.string.isRequired,

};

export default PageCover;
