import React from 'react';
import Banner from '../Banner/Banner';
import HowTallyWorks from '../HowTallyWorks/HowTallyWorks';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <News></News>
            <HowTallyWorks></HowTallyWorks>
        </div>
    );
};

export default Home;