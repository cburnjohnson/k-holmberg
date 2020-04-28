import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='home-header'>
            <h1>K.</h1>
            <h2>Holmberg</h2>
            <Link to='/'>View Art</Link>
        </div>
    );
};

export default Header;
