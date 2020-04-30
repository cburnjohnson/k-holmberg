import React, { useContext } from 'react';

const Picture = ({ picture }) => {
    const { src } = picture;
    return (
        <div className='picture-container'>
            <img src={src} alt='' />
        </div>
    );
};

export default Picture;
