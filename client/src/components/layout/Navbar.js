import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-brand'>
                <Link to='/'>K.Holmberg</Link>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <Link to='/'>Gallery</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
