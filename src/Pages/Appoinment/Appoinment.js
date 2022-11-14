import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvilableAppoinments from './AvilableAppoinments/AvilableAppoinments';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvilableAppoinments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvilableAppoinments>
        </div>
    );
};

export default Appoinment;                                                                                                                                                                                                