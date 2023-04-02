import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];


    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{
                    open === true ?
                        <XMarkIcon className="h-8 w-8 text-yellow-500" />
                        :
                        <Bars3Icon className="h-8 w-8 text-yellow-500" />
                }
                </span>
                
            </div>
            <ul className={`bg-slate-300 duration-500 md:flex absolute md:static ${open ? "top-6" : '-top-64'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;