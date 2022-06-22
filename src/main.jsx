import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationProvider from './context/Navigation/NavigationProvider';
import { SidebarProvider } from './context/Sidebar/SidebarProvider';
import MainRouter from './routers/MainRouter';
import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SidebarProvider>
      <NavigationProvider>
        <MainRouter />
      </NavigationProvider>
    </SidebarProvider>
  </React.StrictMode>
);
