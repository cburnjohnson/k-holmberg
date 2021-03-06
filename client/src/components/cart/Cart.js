import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';
import AlertContext from '../../context/alert/alertContext';
import PictureContext from '../../context/picture/pictureContext';

import CartItem from './CartItem';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
    const { cartItems, closeCart, isOpen, clearCart } = useContext(CartContext);
    const { setAlert } = useContext(AlertContext);
    const { removePicture } = useContext(PictureContext);

    const makePayment = (token) => {
        const body = {
            token,
            products: [...cartItems],
            total:
                cartItems.reduce((total, item) => {
                    return total + item.price;
                }, 0) * 100,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        return fetch(`http://localhost:5000/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('An error occurred');
                } else {
                    setAlert('success', 'Your purchase has been confirmed.');
                    removePicture(cartItems.map((picture) => picture.id));
                    clearCart();
                }
            })
            .catch((err) => {
                setAlert('error', err.message);
                clearCart();
            });
    };

    return (
        <div id='cart' className={isOpen === true ? 'isOpen' : 'isClosed'}>
            <div className='cart-header'>
                <h1>
                    <span className='green'>C</span>{' '}
                    <span className='blue'>a</span>{' '}
                    <span className='yellow'>r</span>{' '}
                    <span className='orange'>t</span>
                </h1>
                <i
                    className='far fa-times-circle close-cart'
                    onClick={closeCart}
                ></i>
            </div>
            <div className='cart-demo-msg'>
                <div>
                    <span className='demo-msg'>
                        This is a demo eCommerce site.
                    </span>
                    <br />
                    Use stripe's test card info to simulate a transaction.
                </div>
                <div className='test-card-info'>
                    Card Number: 4242 4242 4242 4242
                    <br />
                    Exp: Any future date
                    <br />
                    CVC: 123
                </div>
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

            <StripeCheckout
                stripeKey={process.env.REACT_APP_KEY}
                token={makePayment}
                name='Checkout'
                amount={
                    cartItems.reduce((total, item) => {
                        return total + item.price;
                    }, 0) * 100
                }
                shippingAddress
                billingAddress
            >
                <button id='cart-button'>Checkout</button>
            </StripeCheckout>

            <div className='cart-mobile-space'></div>
        </div>
    );
};

export default Cart;
