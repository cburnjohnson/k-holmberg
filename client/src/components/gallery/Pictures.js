import React, { useContext } from 'react';
import Picture from './Picture';
import PictureContext from '../../context/picture/pictureContext';

const Pictures = () => {
    const { pictures } = useContext(PictureContext);

    return (
        <div className='picture-carousel'>
            {pictures.map((picture) => (
                <Picture picture={picture} />
            ))}
        </div>
    );
};

export default Pictures;
