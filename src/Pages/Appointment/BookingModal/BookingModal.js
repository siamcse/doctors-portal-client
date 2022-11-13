import { format } from 'date-fns';
import React from 'react';
import Swal from 'sweetalert2'

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name: treatmentName, slots } = treatment;
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

        //modal exit after submit
        setTreatment(null);
        Swal.fire(
            'Thank You!',
            `You booking an appointment on date ${date} at ${slot}!`,
            'success'
        )
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
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required/>
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" required/>
                        <input className='btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;