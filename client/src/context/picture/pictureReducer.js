import { REMOVE_PICTURE, SET_PATHNAME } from '../types';

export default (state, action) => {
    switch (action.type) {
        case REMOVE_PICTURE:
            return {
                ...state,
                pictures: state.pictures.filter(
                    (picture) => !action.payload.includes(picture.id)
                ),
            };
        case SET_PATHNAME:
            return {
                ...state,
                pathname: action.payload,
            };
        default:
            return state;
    }
};
