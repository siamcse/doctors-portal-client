import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';
import Treatment from '../Treatment/Treatment';
import bg from '../../../assets/images/bg.png'

const Home = () => {
    return (
        <div className='mx-5'>
            <section style={{ background: `url(${bg})` }}>
                <Banner />
                <InfoCards />
            </section>
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;