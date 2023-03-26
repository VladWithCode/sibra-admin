import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import queryClient from './requests/client';
import MainRouter from './routers/MainRouter';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MainRouter />
        </QueryClientProvider>
    </React.StrictMode>
);
