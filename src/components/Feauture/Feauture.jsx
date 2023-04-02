import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feauture = ({feature}) => {
    return (
        <div className='flex gap-2 my-2'>
            <CheckCircleIcon className="h-6 w-6 text-green-800" />
            <span>{feature}</span>
        </div>
    );
};

export default Feauture;