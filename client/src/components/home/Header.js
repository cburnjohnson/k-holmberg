import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-home'>
            <h1>K.</h1>
            <h2>Holmberg</h2>

            <div className='header-sub'>
                <h2 className='header-art'>Art</h2>
                <Link to='/'>View Art</Link>
            </div>
        </header>
    );
};

export default Header;
