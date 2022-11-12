import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="card lg:card-side bg-base-100 mt-36">
            <figure>
                <img className='lg:w-1/2 w-3/4' src={treatment} alt="" />
            </figure>
            <div className="card-body lg:w-2/5 lg:pr-44">
                <h2 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;