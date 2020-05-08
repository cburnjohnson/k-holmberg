import React, { useReducer } from 'react';
import PictureContext from './pictureContext';
import pictureReducer from './pictureReducer';

import TestPicture from '../../images/test-picture.jpg';

const PictureState = (props) => {
    const initialState = {
        pictures: [
            { id: 1, src: TestPicture, alt: 'test', price: 10 },
            { id: 2, src: TestPicture, alt: 'test', price: 10 },
            { id: 3, src: TestPicture, alt: 'test', price: 10 },
        ],
    };

    const [state, dispatch] = useReducer(pictureReducer, initialState);

    return (
        <PictureContext.Provider value={{ pictures: state.pictures }}>
            {props.children}
        </PictureContext.Provider>
    );
};

export default PictureState;
