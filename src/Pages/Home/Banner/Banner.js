import React from 'react';
import { Link } from 'react-router-dom';
// import bgBanner from '../../../assets/images/bg.png';
import bannerImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton';
const Banner = () => {
    return (
        <div  className="hero mt-5">
           
           {/* style={
            {
                backgroundImage: `url(${bgBanner})`,
                backgroundRepeat: "no-repeat", height: 350, width: 1300,

            }
        } */}

            <div className="hero-content flex-col justify-between lg:gap-72 lg:flex-row-reverse mx-2 mb-16">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold mt-8"> Dental Care With Expert</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <PrimaryButton> <Link className='lg:text-left  w-20' to='appointment'> Get Start </Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;