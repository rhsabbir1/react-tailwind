import React from 'react';

const Link = ({route}) => {
    return (
        <li className='m-4 hover:bg-orange-400 px-4'>
            {route.name}
        </li>
    );
};

export default Link;