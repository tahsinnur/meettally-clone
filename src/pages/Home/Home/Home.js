import React from 'react';
import Banner from '../Banner/Banner';
import HowTallyWorks from '../HowTallyWorks/HowTallyWorks';
import News from '../News/News';
import PayOff from '../PayOff/PayOff';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <News></News>
            <HowTallyWorks></HowTallyWorks>
            <PayOff></PayOff>
        </div>
    );
};

export default Home;