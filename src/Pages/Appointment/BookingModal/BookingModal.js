import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointDate: date,
            patient: name,
            slot,
            phone,
            email,
            treatment: treatmentName
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    Swal.fire(
                        'Thank You!',
                        `You booking an appointment on date ${date} at ${slot}!`,
                        'success'
                    );
                    refetch();
                }
                else{
                    Swal.fire(
                        'Error',
                        `${data.message}`,
                        'error'
                    );
                }

            })

        //modal exit after submit
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-12'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, indx) => <option
                                    value={slot}
                                    key={indx}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input className='btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;