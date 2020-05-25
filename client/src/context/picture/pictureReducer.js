import { REMOVE_PICTURE } from '../types';

export default (state, action) => {
    switch (action.type) {
        case REMOVE_PICTURE:
            return {
                ...state,
                pictures: state.pictures.filter(
                    (picture) => !action.payload.includes(picture.id)
                ),
            };
        default:
            return state;
    }
};
