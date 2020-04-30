import React from 'react';

const Picture = ({ picture }) => {
    const { src, alt, price } = picture;
    return (
        <div className='picture-container'>
            <span className='picture-price'>{price}</span>
            <img src={src} alt={alt} />
            <button className='picture-button'>add to cart</button>
        </div>
    );
};

export default Picture;
