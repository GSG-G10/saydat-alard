/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.jsx';
import { ConfigProvider } from 'antd';
import App from './App';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
