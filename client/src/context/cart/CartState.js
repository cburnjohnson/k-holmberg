import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import TestPicture from '../../images/test-picture.jpg';

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
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;
