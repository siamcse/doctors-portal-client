import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='text-center mt-32' style={{
            background: `url(${appointment})`
        }}>
            <div className='pt-16'>
                <h4 className='text-primary text-xl font-bold'>Appointment</h4>
                <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
            </div>
            <div className='grid grid-cols-1 md:w-2/4 lg:w-1/4 md:mx-auto mx-7 gap-5 mt-10'>
                <input type="text" placeholder="Email Address" className="input w-full  max-w-md" />
                <input type="text" placeholder="Subject" className="input w-full max-w-md" />
                <textarea className="textarea max-w-md textarea-bordered h-24" placeholder="Your message"></textarea>
            </div>
            <div className='pb-20 mt-10'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactForm;