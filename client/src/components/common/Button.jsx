import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const Btn = ({
  text, type, btnHandler, load,
}) => (
  <Button
    type={type}
    onClick={btnHandler}
    loading={load}
  >
    {text}
  </Button>

);

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  btnHandler: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
};

export default Btn;
