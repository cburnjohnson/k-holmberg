import { OPEN_CART } from '../types';

export default (state, action) => {
    switch (action.type) {
        case OPEN_CART:
            return {
                ...state,
                isOpen: true,
            };
        default:
            return state;
    }
};
