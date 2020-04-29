import React from 'react';

import BackgroundImages from '../components/layout/BackgroundImages';
import Pictures from '../components/gallery/Pictures';

const Gallery = () => {
    return (
        <div className='gallery'>
            <h1>
                <span className='blue'>G</span>{' '}
                <span className='purple'>A</span>{' '}
                <span className='green'>L</span>{' '}
                <span className='green'>L</span> <span className='red'>E</span>{' '}
                <span className='orange'>R</span>{' '}
                <span className='yellow'>Y</span>
            </h1>
            <Pictures />
            <BackgroundImages />
        </div>
    );
};

export default Gallery;
