import React from 'react';

const ReviewsCard = ({ review }) => {
    const { name, immage, location } = review
    return (
        <div className="card md:card-side mx-5 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex">
                    <figure><img className='mx-5 ' src={immage} alt="" /></figure>
                    <div>
                        <h2 className="card-title m-5 mb-0">{name}</h2>
                        <p className='font-bold ml-6 mt-0'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;