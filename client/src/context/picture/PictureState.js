import React, { useReducer } from 'react';
import PictureContext from './pictureContext';
import pictureReducer from './pictureReducer';

const PictureState = (props) => {
    const initialState = {
        pictures: [],
    };

    const [state, dispatch] = useReducer(pictureReducer, initialState);

    return (
        <PictureContext.Provider value={{ pictures: state.pictures }}>
            {props.children}
        </PictureContext.Provider>
    );
};

export default PictureState;
