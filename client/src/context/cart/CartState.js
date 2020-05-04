import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import TestPicture from '../../images/test-picture.jpg';

import { OPEN_CART, CLOSE_CART } from '../types';

const CartState = (props) => {
    const initialState = {
        cartItems: [
            { id: 1, src: TestPicture, alt: 'test', price: 10 },
            { id: 2, src: TestPicture, alt: 'test', price: 10 },
            { id: 3, src: TestPicture, alt: 'test', price: 10 },
            { id: 4, src: TestPicture, alt: 'test', price: 10 },
            { id: 5, src: TestPicture, alt: 'test', price: 10 },
            { id: 6, src: TestPicture, alt: 'test', price: 55 },
        ],
        isOpen: false,
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const openCart = () => {
        dispatch({ type: OPEN_CART });
    };

    const closeCart = () => {
        dispatch({ type: CLOSE_CART });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                isOpen: state.isOpen,
                openCart,
                closeCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;
