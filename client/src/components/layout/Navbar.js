import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <button className='nav-cart'>Cart(1)</button>
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
