import React from 'react';
import Feauture from '../Feauture/Feauture';

const PriceCard = ({price}) => {
    return ( 
        <div className=' bg-indigo-300 p-6 mt-8 rounded-md flex flex-col'>
            <h1 className='text-center'>
                <span className='text-4xl font-bold text-purple-800'>{price.price}</span><span className='text-white font-bold text-2xl'>/mon</span>
            </h1>
            <h3 className='text-2xl font-bold text-center my-6'>{price.name}</h3>
            <p className='text-2xl font-bold underline text-white'>Features :</p>
            {
                price.features.map((feature, idx) =><Feauture
                key={idx}
                feature={feature}
                ></Feauture>)
            }
            <button className='w-full bg-green-700 rounded-md p-2 font-bold text-white mt-auto'>Bye Now</button>
        </div>
    );
};

export default PriceCard;