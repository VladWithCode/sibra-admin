import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationProvider from './context/Navigation/NavigationProvider';
import ProjectProvider from './context/Projects/ProjectProvider';
import { SidebarProvider } from './context/Sidebar/SidebarProvider';
import ToastProvider from './context/Toast/ToastProvider';
import MainRouter from './routers/MainRouter';
// import './sass/main.scss';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastProvider>
      <SidebarProvider>
        <NavigationProvider>
          <ProjectProvider>
            <MainRouter />
          </ProjectProvider>
        </NavigationProvider>
      </SidebarProvider>
    </ToastProvider>
  </React.StrictMode>
);
