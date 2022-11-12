import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <Treatment />
        </div>
    );
};

export default Home;