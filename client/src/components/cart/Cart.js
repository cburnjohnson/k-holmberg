import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

import CartItem from './CartItem';

const Cart = () => {
    const { cartItems, closeCart, isOpen } = useContext(CartContext);

    return (
        <div id='cart' className={isOpen === true ? 'isOpen' : 'isClosed'}>
            <div className='cart-header'>
                <h1>
                    <span className='green'>C</span>{' '}
                    <span className='blue'>a</span>{' '}
                    <span className='yellow'>r</span>{' '}
                    <span className='orange'>t</span>
                </h1>
                <i class='far fa-times-circle' onClick={closeCart}></i>
            </div>

            <div id='cartItems'>
                {cartItems &&
                    cartItems.map((cartItem) => (
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))}
            </div>
            <div id='cartTotal'>
                <h2>
                    <span className='orange'>T</span>
                    <span className='purple'>o</span>
                    <span className='orange'>t</span>
                    <span className='blue'>a</span>
                    <span className='yellow'>l</span>
                </h2>
                <span className='green'>$</span>
                {cartItems.length > 0
                    ? cartItems.reduce((total, item) => {
                          return total + item.price;
                      }, 0)
                    : '0'}
            </div>
            <button id='cart-button'>Checkout</button>
        </div>
    );
};

export default Cart;
