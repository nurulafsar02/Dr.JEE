import React from 'react';
import AppoinmentHomeCard from './AppoinmentHomeCard/AppoinmentHomeCard';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Reviews from './Review/Reviews';
import Services from './Services/Services';
import Terms from './Terms/Terms';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Terms></Terms>
           <AppoinmentHomeCard></AppoinmentHomeCard>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;