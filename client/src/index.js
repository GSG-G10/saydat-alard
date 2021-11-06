import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import Libro from './components/libro';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <Libro />
    <App />
  </ConfigProvider>,
  document.getElementById('root'),
);
