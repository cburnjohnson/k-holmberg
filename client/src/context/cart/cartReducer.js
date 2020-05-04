import { OPEN_CART, CLOSE_CART } from '../types';

export default (state, action) => {
    switch (action.type) {
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
