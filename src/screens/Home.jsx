import React from 'react';
import ScreenHeader from '../components/Screen/ScreenHeader';

function Home() {
  return (
    <div className='homepage ui-screen'>
      <ScreenHeader heading='Inicio' className='homepage__header' />
      <div className='homepage__body ui-screen__body --flex'></div>
    </div>
  );
}

export default Home;
