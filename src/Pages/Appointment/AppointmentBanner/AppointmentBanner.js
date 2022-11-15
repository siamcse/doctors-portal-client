import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='pt-16 md:py-60' style={{
            background: `url(${bg})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col md:gap-32 lg:flex-row-reverse">
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='pt-16 md:pt-0'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;