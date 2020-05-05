import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import TestPicture from '../../images/test-picture.jpg';

import { OPEN_CART, CLOSE_CART, ADD_CART_ITEM } from '../types';

const CartState = (props) => {
    const initialState = {
        cartItems: [],
        isOpen: false,
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addCartItem = (picture) => {
        dispatch({ type: ADD_CART_ITEM, payload: picture });
    };

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
                addCartItem,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;
