import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import Libro from './components/libro';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
      <Libro />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
