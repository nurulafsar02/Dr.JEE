import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton';
import { Link } from 'react-router-dom';
const AppoinmentHomeCard = () => {
    return (
        <section className=' rounded-lg my-10 mx-6' style={{
            background:`url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-20 h-[500px]  lg:w-1/2 hidden lg:block rounded-lg" alt='' />
                    <div>
                        <h3 className='font-medium text-green-400 text-xl'>Appointment</h3>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat <br />
                         ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         <PrimaryButton> <Link className='text-center lg:text-left w-24' to='/appointment'>Appointment </Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentHomeCard;