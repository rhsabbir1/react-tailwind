import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrice] = useState([])

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrice(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl p-3 font-bold text-purple-950 bg-purple-600 text-center'>Awesome Affordable Price</h1>
            <div className='grid md:grid-cols-3 mx-2 gap-4'>
                {
                    prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Pricelist;