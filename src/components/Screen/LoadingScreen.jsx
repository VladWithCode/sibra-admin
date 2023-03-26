import React from 'react';
import Spinner from '../UI/Spinner';
import Screen from './Screen';
import ScreenHeader from './ScreenHeader';

function LoadingScreen({ children }) {
    return (
        <Screen>
            <ScreenHeader className="justify-between" heading="Cargando...">
                {children}
            </ScreenHeader>
            <Spinner />
        </Screen>
    );
}

export default LoadingScreen;
