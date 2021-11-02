import React from 'react';

const Page = React.forwardRef((props, ref) => (
  <div className="demoPage" ref={ref}>
    <h1>Page Header</h1>
    <p>{props.children}</p>
    <p>
      Page number:
      {props.number}
    </p>
  </div>
));

export default Page;
