import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData =[
        {
            id:1,
            name:'Opening Hours',
            description: 'Every Day open 9.00am to 4.30pm ',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-green-400'
        },
        {
            id:2,
            name:'Visit Our location',
            description: 'Brooklyn,NY 10036, United State',
            icon: marker,
            bgClass: 'bg-neutral-focus'

        },
        {
            id:3,
            name:'Contact Us',
            description: '000 1326 34560',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-green-400'

        }
    ]

    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1'>
            {
                cardData.map(card =><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;