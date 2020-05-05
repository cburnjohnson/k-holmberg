import { OPEN_CART, CLOSE_CART, ADD_CART_ITEM } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems],
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
        default:
            return state;
    }
};
