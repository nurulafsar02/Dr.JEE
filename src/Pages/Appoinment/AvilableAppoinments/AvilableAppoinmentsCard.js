import React from 'react';

const AvilableAppoinmentsCard = ({ optionAppoinment, setTreatment }) => {
    const { name, slots } = optionAppoinment;
    return (
        <div className='card text-center mx-5 my-8 shadow-xl '>
            <div className="card-body ">
                <h2 className="text-2xl font-bold text-green-500 ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avilabele</p>
                <div>
                    <label
                        htmlFor="Booking-modal"
                        onClick={() => setTreatment(optionAppoinment)}
                        className="btn bg-gradient-to-r from-cyan-500 to-green-400 hover:from-green-500 hover:to-pink-500">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AvilableAppoinmentsCard;