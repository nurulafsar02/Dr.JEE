import { format } from 'date-fns/esm';
import React from 'react';

const Booking = ({ treatment, selectedDate,setTreatment}) => {
    const { name, slots } = treatment; //treatment is appointment options just different name
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const Name = form.Name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment:name,
            patinent: Name,
            slot,
            email,
            phone,
        }
        //todo: send data to the server
        console.log(booking);
        setTreatment(null);
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
                        <input name='Name' type="text" placeholder="Your Name" className="input w-full input-bordered mt-6" required />
                        <input name='email' type="email" placeholder="Email" className="input w-full input-bordered mt-6" required />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered mt-6" required />
                        <input type="submit" className='w-full mt-6 input-bordered max-w-xm btn ' value="Book It" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;