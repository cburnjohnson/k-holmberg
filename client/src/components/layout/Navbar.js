import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import AlertContext from '../../context/alert/alertContext';

const Navbar = () => {
    const { cartItems, openCart } = useContext(CartContext);
    const { setAlert } = useContext(AlertContext);

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
            <button className='nav-cart' onClick={openCart}>
                Cart({cartItems.length})
            </button>
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
