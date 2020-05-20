import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

const Picture = ({ picture }) => {
    const { addCartItem } = useContext(CartContext);

    const { src, alt, price, dimensions } = picture;

    const onClick = () => {
        addCartItem(picture);
    };

    return (
        <div className='picture-container'>
            <span className='picture-dimensions'>{dimensions}</span>
            <span className='picture-price'>${price}</span>
            <img src={src} alt={alt} />
            <button className='picture-button' onClick={onClick}>
                add to cart
            </button>
        </div>
    );
};

export default Picture;
