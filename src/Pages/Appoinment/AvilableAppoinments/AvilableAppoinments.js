import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvilableAppoinmentsCard from './AvilableAppoinmentsCard';

const AvilableAppoinments = ({ selectedDate, setSelectedDate }) => {
    const [AppoinmentsOptions, setAppoinmentsOptions]=useState([])
    useEffect(()=>{
        fetch('appointmentService.json')
        .then(res => res.json())
        .then(data => setAppoinmentsOptions(data))
    },[])
    return (
        <div>
            <p className='lg:mt-2 text-center  mt-28 text-green-400 '><span className='text-xl'>Avilabele Appointment</span> <b>{format(selectedDate, 'PP')}</b> </p>
            <div className='grid gap-6 lg:grid-cols-3 my-10 md:grid-cols-2 sm-grid-cols-1'>
                {
                   AppoinmentsOptions.map(optionAppoinment =><AvilableAppoinmentsCard
                   key={optionAppoinment._id}
                   optionAppoinment={optionAppoinment}
                   ></AvilableAppoinmentsCard>) 
                }
            </div>
        </div>
    );
};

export default AvilableAppoinments;