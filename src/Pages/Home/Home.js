import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import AppoinmentHomeCard from './AppoinmentHomeCard/AppoinmentHomeCard';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm/ContactForm';
import InfoCards from './InfoCards/InfoCards';
import Reviews from './Review/Reviews';
import Services from './Services/Services';
import Terms from './Terms/Terms';

const Home = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <progress className="lg:mx-[500px] m-32 lg:my-[250px] progress w-56"></progress>
       }
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Terms></Terms>
           <AppoinmentHomeCard></AppoinmentHomeCard>
           <Reviews></Reviews>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;