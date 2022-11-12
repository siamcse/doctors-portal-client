import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceItems = [
        {
            id: 1,
            name: "Fluoride Treatment",
            image: fluoride,
            description: " Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums."
        },
        {
            id: 2,
            name: "Cavity Filling",
            image: cavity,
            description: "Fillings prevent bacteria or plaque from building up inside cavities, which could lead to serious infections."
        },
        {
            id: 3,
            name: "Teeth Whitening",
            image: whitening,
            description: "Tooth whitening is any process that lightens the color of a tooth."
        },
    ]
    return (
        <div>
            <div className='text-center mt-32 mb-16'>
                <h4 className='text-xl font-bold mb-2 text-primary'>Our Services</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceItems.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;