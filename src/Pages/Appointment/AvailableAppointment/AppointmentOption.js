import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                <p className='text-sm'>{slots.length > 0 ? slots[0]: 'Try another day'}</p>
                <p className='text-xs'>{slots.length} {slots.length>1 ? 'spaces': 'space'} available</p>
                <div className="card-actions justify-center">
                    <label 
                    htmlFor="booking-modal" 
                    className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                    onClick={()=>setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;