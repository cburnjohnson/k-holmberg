import React, { useContext } from 'react';
import CartContext from '../context/cart/cartContext';

import BackgroundImages from '../components/layout/BackgroundImages';
import Pictures from '../components/gallery/Pictures';
import Cart from '../components/cart/Cart';

const Gallery = () => {
    const { isOpen } = useContext(CartContext);

    return (
        <div className='gallery'>
            <h1>
                <span className='purple'>G</span>{' '}
                <span className='blue'>A</span> <span className='green'>L</span>{' '}
                <span className='green'>L</span>{' '}
                <span className='yellow'>E</span>{' '}
                <span className='orange'>R</span> <span className='red'>Y</span>
            </h1>
            <Pictures />

            <BackgroundImages />

            <Cart />
        </div>
    );
};

export default Gallery;
