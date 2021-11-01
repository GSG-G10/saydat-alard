/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/common/Footer';
import App from './App';
import Bookcomponant from './components/bookcomponant/Bookcomponant';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
    <Bookcomponant />
  </React.StrictMode>,
  document.getElementById('root'),
);
