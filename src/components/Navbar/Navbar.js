import { MenuAlt1Icon, MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Coupons', link: '/coupons' },
        { id: 5, name: 'Contact', link: '/contact' },
    ]
    return (
        <nav className={`${open? 'bg-indigo-100':'bg-indigo-300'}`
}>

            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open?<XIcon></XIcon> :<MenuAlt1Icon></MenuAlt1Icon> }
            </div>


            <ul className={`md:flex list-none   justify-center absolute md:static bg-indigo-100 w-full duration-500 ease-out ${open? 'top-6':'top-[-200px]'}`}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;