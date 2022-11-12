import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';
import Treatment from '../Treatment/Treatment';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;