import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-brand'>
                <Link to='/'>K.Holmberg</Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
