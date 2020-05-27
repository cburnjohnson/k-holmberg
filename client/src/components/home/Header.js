import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PictureContext from '../../context/picture/pictureContext';

const Header = () => {
    const { setPathname } = useContext(PictureContext);

    return (
        <header className='header-home'>
            <h1>K.</h1>
            <h2 className='header-ln'>Holmberg</h2>

            <div className='header-sub'>
                <h2 className='header-art'>A r t</h2>
                <Link to='/gallery' onClick={() => setPathname('/gallery')}>
                    View Art
                </Link>
            </div>
        </header>
    );
};

export default Header;
