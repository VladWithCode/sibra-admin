import React from 'react';
import BackBtn from '../UI/BackBtn';
import Screen from './Screen';
import ScreenHeader from './ScreenHeader';

function ErrorScreen({ error }) {
  return (
    <Screen>
      <ScreenHeader heading={error.title || 'Error!'} />
      <div className="flex h-[calc(100%-8rem)]">
        <p className="m-auto text-3xl text-zinc-400">
          {error.message || 'Ocurrio un error!'}
        </p>
      </div>
      <BackBtn />
    </Screen>
  );
}

export default ErrorScreen;
