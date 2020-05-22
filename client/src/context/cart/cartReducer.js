import {
    OPEN_CART,
    CLOSE_CART,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    CLEAR_CART,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems],
            };
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload
                ),
            };
        case OPEN_CART:
            return {
                ...state,
                isOpen: true,
            };
        case CLOSE_CART:
            return {
                ...state,
                isOpen: false,
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};
