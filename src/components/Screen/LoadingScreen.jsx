import React from 'react';
import Screen from './Screen';
import ScreenHeader from './ScreenHeader';

function LoadingScreen({}) {
  return (
    <Screen>
      <ScreenHeader heading="Cargando..." />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="block w-36 h-36 rounded-full border-8 border-b-info animate-spin" />
      </div>
    </Screen>
  );
}

export default LoadingScreen;
