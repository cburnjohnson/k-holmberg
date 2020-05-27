import React, { useReducer } from 'react';
import PictureContext from './pictureContext';
import pictureReducer from './pictureReducer';

import RiverForrest from '../../images/paintings/river-forrest.png';
import Dancer from '../../images/paintings/dancer.jpg';
import MountainLake from '../../images/paintings/mountain-lake.jpg';
import Sunset from '../../images/paintings/sunset.jpg';
import NightLights from '../../images/paintings/night-lights.jpg';
import Wine from '../../images/paintings/wine.jpg';
import Sunflower from '../../images/paintings/sunflower.jpg';
import Jellyfish from '../../images/paintings/jellyfish.jpg';

import { REMOVE_PICTURE, SET_PATHNAME } from '../types';

const PictureState = (props) => {
    const initialState = {
        pictures: [
            {
                id: 1,
                src: RiverForrest,
                alt: 'River forrest',
                dimensions: '10x8',
                price: 10,
            },
            {
                id: 2,
                src: Dancer,
                alt: 'Dancer',
                dimensions: '10x8',
                price: 10,
            },
            {
                id: 3,
                src: MountainLake,
                alt: 'Mountain Lake',
                dimensions: '10x8',
                price: 10,
            },
            {
                id: 4,
                src: Sunset,
                alt: 'Sunset',
                dimensions: '10x8',
                price: 15,
            },
            {
                id: 5,
                src: NightLights,
                alt: 'Night Lights',
                dimensions: '10x8',
                price: 15,
            },
            {
                id: 6,
                src: Wine,
                alt: 'But first wine',
                dimensions: '10x8',
                price: 20,
            },
            {
                id: 7,
                src: Sunflower,
                alt: 'Sunflowers',
                dimensions: '10x8',
                price: 20,
            },
            {
                id: 8,
                src: Jellyfish,
                alt: 'Jellyfish',
                dimensions: '10x8',
                price: 20,
            },
        ],
        pathname: window.location.pathname,
    };

    const [state, dispatch] = useReducer(pictureReducer, initialState);

    const removePicture = (pictureIds) => {
        dispatch({ type: REMOVE_PICTURE, payload: pictureIds });
    };

    const setPathname = (pathname) => {
        dispatch({ type: SET_PATHNAME, payload: pathname });
    };

    return (
        <PictureContext.Provider
            value={{
                pictures: state.pictures,
                pathname: state.pathname,
                removePicture,
                setPathname,
            }}
        >
            {props.children}
        </PictureContext.Provider>
    );
};

export default PictureState;
