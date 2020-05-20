import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

const Overlay = () => {
    const { isOpen } = useContext(CartContext);

    return <div id='overlay' className={isOpen === true ? 'show' : ''}></div>;
};

export default Overlay;
