import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
// import App from './App/index';
import Libro from './components/libro';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    {/* <App /> */}
    <Libro />
  </ConfigProvider>,
  document.getElementById('root'),
);
