import React from 'react';

import BackgroundImages from '../components/layout/BackgroundImages';
import Pictures from '../components/gallery/Pictures';

const Gallery = () => {
    return (
        <>
            <h1>G A L L E R Y</h1>
            <Pictures />
            <BackgroundImages />
        </>
    );
};

export default Gallery;
