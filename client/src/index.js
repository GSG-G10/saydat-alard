import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import 'antd/dist/antd.css';
import Slider from './components/slider/slider';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
      <Slider />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
