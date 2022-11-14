import React from 'react';
import ReviewsCard from './ReviewsCard';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const Reviews = () => {
    const ReviewsData = [
        {
            id: 1,
            name: 'Watosn Herry',
            desciption: '',
            immage: people1,
            location: 'Wassington'
        },
        {
            id: 2,
            name: 'Rojer fedral',
            desciption: '',
            immage: people2,
            location: 'New Jarssy'
        },
        {
            id: 3,
            name: 'Miky Wood',
            desciption: '',
            immage: people3,
            location: 'plorida'
        }
    ]
    return (
        <section className='my-10'>
            <div className='mt-16 flex justify-between mx-6'>
                <div>
                    <h1 className='font-medium text-green-400 text-xl'>Testomonial</h1>
                    <h1 className='text-4xl font-bold'>What Our Patients Says</h1>
                </div>
                <img className='justify-end h-24' src={quote} alt="" />
            </div>
            <div className='grid gap-6  lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1'>
                {
                    ReviewsData.map(review => <ReviewsCard
                        key={review.id}
                        review={review}
                    ></ReviewsCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;