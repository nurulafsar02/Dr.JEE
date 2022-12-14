import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

const Booking = ({ treatment, selectedDate, setTreatment ,refetch}) => {
    const { name, slots } = treatment; //treatment is appointment options just different name
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const Name = form.Name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patinent: Name,
            slot,
            email,
            phone,
        }
        //todo: send data to the server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if
                    (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Done');
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={date} className="input w-full input-bordered mt-6" />
                        <select name='slot' className="select select-bordered w-full mt-5 ">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='Name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered mt-6" disabled />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email" className="input w-full input-bordered mt-6" disabled />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered mt-6" required />
                        <input type="submit" className='w-full mt-6 input-bordered max-w-xm btn ' value="Book It" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;