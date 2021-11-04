import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import Addproverbs from './components/Proverbs';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
      <Addproverbs />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
