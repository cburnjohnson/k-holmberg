import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import AlertContext from '../../context/alert/alertContext';
import PictureContext from '../../context/picture/pictureContext';

const Navbar = () => {
    const { cartItems, openCart } = useContext(CartContext);
    const { setAlert } = useContext(AlertContext);
    const { setPathname, pathname } = useContext(PictureContext);

    const homeLinks = (
        <>
            <Link to='/gallery' onClick={() => setPathname('/gallery')}>
                Gallery
            </Link>
        </>
    );

    const galleryLinks = (
        <>
            <button
                className='nav-cart'
                onClick={() => {
                    if (cartItems.length < 1) {
                        setAlert('error', 'Your cart is empty');
                    } else {
                        openCart();
                    }
                }}
            >
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
