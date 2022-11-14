import React from 'react';
import { Link } from 'react-router-dom';
// import bgBanner from '../../../assets/images/bg.png';
import bannerImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton';
const Banner = () => {
    return (
        <div  className="hero mb-20 mt-5">
           
           {/* style={
            {
                backgroundImage: `url(${bgBanner})`,
                backgroundRepeat: "no-repeat", height: 350, width: 1300,

            }
        } */}

            <div className="hero-content flex-col lg:flex-row-reverse mx-2 mb-16">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold mt-8"> Dental Care With Expert</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link className='text-center lg:text-left' to='appointment'><PrimaryButton>Get Start</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;