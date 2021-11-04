import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import Login from './pages/Login';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
      <Login />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
