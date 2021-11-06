import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>,
  document.getElementById('root'),
);
