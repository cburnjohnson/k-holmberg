import React, { useContext } from 'react';
import Picture from './Picture';
import PictureContext from '../../context/picture/pictureContext';

const Carousel = () => {
    const { pictures } = useContext(PictureContext);

    return (
        <div className='picture-carousel'>
            <div
                className='carousel-pictures'
                style={{ width: `${pictures.length}00%` }}
            >
                {pictures.map((picture) => (
                    <Picture picture={picture} key={picture.id} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
