import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectProvider from './context/Projects/ProjectProvider';
import MainRouter from './routers/MainRouter';
// import './sass/main.scss';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProjectProvider>
      <MainRouter />
    </ProjectProvider>
  </React.StrictMode>
);
