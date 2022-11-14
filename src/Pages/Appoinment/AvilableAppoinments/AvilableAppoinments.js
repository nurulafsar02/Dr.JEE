import { format } from 'date-fns';
import React from 'react';

const AvilableAppoinments = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
            <p className='lg:mt-2 text-center  mt-24 mb-20 text-green-400 '><span className='text-xl'>Avilabele Appointment</span> <b>{format(selectedDate, 'PP')}</b> </p>
        </div>
    );
};

export default AvilableAppoinments;