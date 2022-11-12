import React from 'react';

const Testimonial = ({data}) => {
    const {image,name,comment,address} = data;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
                <div className='flex items-center gap-2 mt-11'>
                    <img className='w-16 border-2 border-primary rounded-full p-1' src={image} alt="" />
                    <div>
                        <h4 className='text-xl font-semibold'>{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;