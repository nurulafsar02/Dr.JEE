import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const MyAppointent = () => {

    const {user}= useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email} `;
    
    const {data: bookings = []}= useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-3xl'>My Appointments</h1>

            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                     <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    {
                          bookings.map((booking, i) =><tr
                          key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking.patinent}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                        </tr>)
                      }
                </table>
            </div>
        </div>
    );
};

export default MyAppointent;