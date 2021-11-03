import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import App from './App/index';
import StoryForm from './components/uploadStoryForm';

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <React.StrictMode>
      <App />
      <StoryForm />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root'),
);
