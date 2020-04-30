import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    console.log(window.location.pathname);

    const [pathname, setPathname] = useState(window.location.pathname);

    const homeLinks = (
        <>
            <Link to='/gallery' onClick={() => setPathname('/gallery')}>
                Gallery
            </Link>
        </>
    );

    const galleryLinks = (
        <>
            <button>Cart</button>
        </>
    );

    return (
        <nav className='nav'>
            <div className='nav-brand'>
                <Link to='/' onClick={() => setPathname('/')}>
                    K.Holmberg
                </Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        {pathname === '/gallery' ? galleryLinks : homeLinks}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
