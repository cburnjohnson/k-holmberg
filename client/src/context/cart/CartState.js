import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import TestPicture from '../../images/test-picture.jpg';

const CartState = (props) => {
    const initialState = {
        cartItems: [{ id: 1, src: TestPicture, alt: 'test', price: '$10' }],
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;
