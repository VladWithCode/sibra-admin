import React from 'react';
import Screen from '../components/Screen/Screen';
import ScreenHeader from '../components/Screen/ScreenHeader';

function Home() {
    return (
        <Screen>
            <ScreenHeader heading="Inicio" className="homepage__header" />
            <div className="py-5 px-[5%]"></div>
        </Screen>
    );
}

export default Home;
