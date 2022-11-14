import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluride Treatment',
            description: 'Fluoride is commonly used to strengthen the outer layer of the teeth, known as the enamel.',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Cavity filling is a simple and reasonably straightforward operation that can be done right in the dentist’s clinic.',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is the process of lightening the colour of the teeth.',
            icon: teeth,
        }
    ]
    return (
        <div>
            <div className='my-24 text-center'>
                <h1 className='font-medium text-green-400 text-xl'>OUR SERVICES</h1>
                <h1 className='text-5xl font-bold'>Services We Provide</h1>
            </div>

            <div className='grid mx-6 gap-6 lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1' >
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;