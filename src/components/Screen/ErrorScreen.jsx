import React from 'react';
import Screen from './Screen';
import ScreenHeader from './ScreenHeader';

function ErrorScreen({ error }) {
  return (
    <Screen>
      <ScreenHeader heading={error.title || 'Error!'} />
      <p className="text-lg w-80">{error.message || 'Ocurrio un error!'}</p>
    </Screen>
  );
}

export default ErrorScreen;
