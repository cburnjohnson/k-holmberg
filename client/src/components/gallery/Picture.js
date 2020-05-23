import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';
import AlertContext from '../../context/alert/alertContext';

const Picture = ({ picture }) => {
    const { addCartItem, cartItems } = useContext(CartContext);
    const { setAlert } = useContext(AlertContext);

    const { src, alt, price, dimensions } = picture;

    const onClick = () => {
        const currentPictureIds = cartItems.map((cartItem) => cartItem.id);
        if (!currentPictureIds.includes(picture.id)) {
            addCartItem(picture);
        } else {
            setAlert('error', 'You already have this painting in your cart.');
        }
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
