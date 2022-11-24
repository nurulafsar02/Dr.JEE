import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Booking from '../Booking/Booking';
import AvilableAppoinmentsCard from './AvilableAppoinmentsCard';

const AvilableAppoinments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');
    const { data: appointmentsOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data
        }
    });


    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentsOptions(data))
    // },[])

    return (
        <div>
            <p className='lg:mt-2 text-center  mt-28 text-green-400 '><span className='text-xl'>Avilabele Appointment</span> <b>{format(selectedDate, 'PP')}</b> </p>
            <div className='grid gap-6 lg:grid-cols-3 my-10 md:grid-cols-2 sm-grid-cols-1'>
                {
                    appointmentsOptions.map(optionAppoinment => <AvilableAppoinmentsCard
                        key={optionAppoinment._id}
                        optionAppoinment={optionAppoinment}
                        setTreatment={setTreatment}
                    ></AvilableAppoinmentsCard>)
                }
            </div>
            {
                treatment &&
                <Booking
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></Booking>
            }
        </div>
    );
};

export default AvilableAppoinments;