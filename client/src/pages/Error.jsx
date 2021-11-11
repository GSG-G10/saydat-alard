import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

function Error() {
  const style = {
    backgroundColor: '#185503',
    color: 'white',
    padding: '12px',
    margin: '10px',
    borderRadius: '5px',
    fontSize: '15px',
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/" style={style}>Back to Home</Link>}
    />

  );
}

export default Error;
