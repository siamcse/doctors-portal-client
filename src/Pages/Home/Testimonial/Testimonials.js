import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            id:1,
            name: "Prince Henry",
            image: people1,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id:2,
            name: "Angel Sadiya",
            image: people2,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id:3,
            name: "Princes Mariya",
            image: people3,
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl font-bold mb-2 text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <img className='w-2/12' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 lg:mx-20'>
                {
                    testimonialData.map(data=><Testimonial
                    key={data.id}
                    data={data}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;