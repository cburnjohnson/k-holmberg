import React from 'react';

import BackgroundImages from '../components/layout/BackgroundImages';
import Pictures from '../components/gallery/Pictures';

const Gallery = () => {
    return (
        <div className='gallery'>
            <h1>
                <span className='purple'>G</span>{' '}
                <span className='blue'>A</span> <span className='green'>L</span>{' '}
                <span className='green'>L</span>{' '}
                <span className='yellow'>E</span>{' '}
                <span className='orange'>R</span> <span className='red'>Y</span>
            </h1>
            <Pictures />
            <BackgroundImages />
        </div>
    );
};

export default Gallery;