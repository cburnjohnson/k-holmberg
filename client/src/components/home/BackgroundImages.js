import React from 'react';
import YellowStroke from '../../images/yellow-mobile.png';
import PurpleStroke from '../../images/purple-mobile.png';
import GreenStroke from '../../images/green-mobile.png';
import RedStroke from '../../images/red-mobile.png';
import BlueStroke from '../../images/blue-mobile.png';

const BackgroundImages = () => {
    return (
        <div className='bg-images'>
            <img src={PurpleStroke} alt='' className='paint-bg purple' />
            <img src={BlueStroke} alt='' className='paint-bg blue' />
            <img src={GreenStroke} alt='' className='paint-bg green' />
            <img src={YellowStroke} alt='' className='paint-bg yellow' />
            <img src={RedStroke} alt='' className='paint-bg red' />
        </div>
    );
};

export default BackgroundImages;
