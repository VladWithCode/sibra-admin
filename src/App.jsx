import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';

export const App = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
