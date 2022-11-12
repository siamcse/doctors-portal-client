import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardItems = [
        {
            id:1,
            name: "Opening Hours",
            icon: clock,
            description: "Open at from 9am to 8pm",
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            id:2,
            name: "Visit our location",
            icon: marker,
            description: "Jamalpur, Mymensingh, Bangladesh",
            bgClass: "bg-accent"
        },
        {
            id:3,
            name: "Contact us now",
            icon: phone,
            description: "+880 19601 12553",
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardItems.map(card=><InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;