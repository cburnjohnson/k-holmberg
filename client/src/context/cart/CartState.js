import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import {
    OPEN_CART,
    CLOSE_CART,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    CLEAR_CART,
} from '../types';

const CartState = (props) => {
    const initialState = {
        cartItems: [],
        isOpen: false,
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addCartItem = (picture) => {
        dispatch({ type: ADD_CART_ITEM, payload: picture });
    };

    const removeCartItem = (cartItemId) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: cartItemId });
    };

    const openCart = () => {
        dispatch({ type: OPEN_CART });
    };

    const closeCart = () => {
        dispatch({ type: CLOSE_CART });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                isOpen: state.isOpen,
                openCart,
                closeCart,
                addCartItem,
                removeCartItem,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;
