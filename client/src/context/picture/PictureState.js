import React, { useReducer } from 'react';
import PictureContext from './pictureContext';
import pictureReducer from './pictureReducer';

import RiverForrest from '../../images/paintings/river-forrest.png';
import Dancer from '../../images/paintings/dancer.jpg';
import MountainLake from '../../images/paintings/mountain-lake.jpg';
import Sunset from '../../images/paintings/sunset.jpg';
import NightLights from '../../images/paintings/night-lights.jpg';

const PictureState = (props) => {
    const initialState = {
        pictures: [
            {
                id: 1,
                src: RiverForrest,
                alt: 'River forrest',
                dimensions: '10x8',
                price: 30,
            },
            {
                id: 2,
                src: Dancer,
                alt: 'Dancer',
                dimensions: '10x8',
                price: 30,
            },
            {
                id: 3,
                src: MountainLake,
                alt: 'Mountain Lake',
                dimensions: '10x8',
                price: 30,
            },
            {
                id: 4,
                src: Sunset,
                alt: 'Sunset',
                dimensions: '10x8',
                price: 30,
            },
            {
                id: 5,
                src: NightLights,
                alt: 'Night Lights',
                dimensions: '10x8',
                price: 30,
            },
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
