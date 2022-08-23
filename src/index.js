import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Store from './redux/store/index'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
