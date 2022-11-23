import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { appointDate, price, slot, treatment } = booking;

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-2xl'>Payment for {treatment}</h2>
            <p>Please pay <strong>${price}</strong> for an appointment on {appointDate} at {slot}</p>
            <div className='w-80 mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;