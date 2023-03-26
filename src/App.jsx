import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Toast from './components/Toast/Toast';

export const App = () => {
    return (
        <>
            <Sidebar />
            <Outlet />

            <Toast />
        </>
    );
};
