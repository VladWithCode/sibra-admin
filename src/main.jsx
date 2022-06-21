import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './routers/MainRouter';
import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
