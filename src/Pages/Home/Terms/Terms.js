import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton';

const Terms = () => {
    return (
        <div className="hero ">
            <div className="hero-content grid lg:grid-cols-2 sm:block py-20 lg:flex mx-6 mb-16">
                <img src={treatment} className="max-w-sm lg:mx-24 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl mt-8 font-bold"> Terms And Qonditaion</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link className='text-center lg:text-left' to='appointment'><PrimaryButton>appointment</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Terms;