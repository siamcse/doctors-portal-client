import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
    return (
        <div className='mt-4'>
            <h5 className='text-center text-xl text-secondary font-semibold'>Available Appointments on {format(selectedDate,'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24'>
                {
                    appointmentOptions.map(option=><AppointmentOption
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;