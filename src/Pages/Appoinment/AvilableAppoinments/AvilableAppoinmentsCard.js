import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';

const AvilableAppoinmentsCard = ({optionAppoinment}) => {
    const {name, slots} = optionAppoinment;
    return (
        <div className='card text-center mx-5 shadow-xl '>
            <div className="card-body ">
                <h2 className="text-2xl font-bold text-green-500 ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1? 'spaces': 'space'} avilabele</p>
                <div>
                    <PrimaryButton className='text-center'>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AvilableAppoinmentsCard;