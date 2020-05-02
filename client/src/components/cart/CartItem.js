import React from 'react';

const CartItem = ({ cartItem }) => {
    return (
        <div className='cart-item'>
            <img src={cartItem.src} alt='' />
            <div className='cart-item-price'>{cartItem.price}</div>
            <div className='cart-item-remove'>
                <i class='fas fa-trash-alt'></i>
            </div>
        </div>
    );
};

export default CartItem;
