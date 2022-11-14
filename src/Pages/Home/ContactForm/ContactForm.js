import React from 'react';
import contactBg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton';

const ContactForm = () => {
    return (
        <section className=' rounded-lg my-16 mx-6' style={{
            background:`url(${contactBg})`
        }}>
            <div className="hero-content flex-col ">
                <div className="text-center mt-5">
                    <p className='font-medium text-green-400 text-xl'>Contact Us</p>
                    <h1 className="text-3xl text-white font-bold">Stay Connected With Us</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <textarea className="textarea textarea-bordered text-xl" placeholder="Your massage"></textarea></div>
                        <div className="form-control mt-6 text-center">
                       <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;