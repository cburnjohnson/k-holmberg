import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

import CartItem from './CartItem';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div id='cart'>
            <h1>C a r t</h1>
            <div id='cartItems'>
                {cartItems &&
                    cartItems.map((cartItem) => (
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))}
            </div>
            <button id='cart-button'>Checkout</button>
        </div>
    );
};

export default Cart;
