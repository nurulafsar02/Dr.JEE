import React, { useContext } from 'react';
import bannerImg from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
// import bgBanner from '../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    const {loading}=useContext(AuthContext);
    if(loading){
        return <progress className="lg:mx-[500px] m-32 lg:my-[250px] progress w-56"></progress>
       }

    return (
        <header>
             {/* style={
                
                {
                    backgroundImage: `url(${bgBanner})`,
                    backgroundRepeat: "no-repeat", height: 500, width: 1300,
                }}  */}
            <div className="hero">

                <div className=" hero-content flex-col lg:flex-row-reverse mx-2 mb-16">
                    <img src={bannerImg} className="mx-w-sm lg:w-1/2 h-[350px] rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            className='shadow-xl p-5 h-[350px] '
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;