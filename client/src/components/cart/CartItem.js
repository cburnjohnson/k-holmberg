import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

const CartItem = ({ cartItem }) => {
    const { removeCartItem } = useContext(CartContext);

    const onClick = () => {
        removeCartItem(cartItem.id);
    };

    return (
        <div className='cart-item'>
            <img src={cartItem.src} alt='' />
            <div className='cart-item-price'>${cartItem.price}</div>
            <div className='cart-item-remove'>
                <i className='fas fa-trash-alt' onClick={onClick}></i>
            </div>
        </div>
    );
};

export default CartItem;
