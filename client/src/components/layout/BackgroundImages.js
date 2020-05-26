import React from 'react';
import YellowStrokeM from '../../images/background/yellow-mobile.png';
import PurpleStrokeM from '../../images/background/purple-mobile.png';
import GreenStrokeM from '../../images/background/green-mobile.png';
import RedStrokeM from '../../images/background/red-mobile.png';
import BlueStrokeM from '../../images/background/blue-mobile.png';

const BackgroundImages = () => {
    return (
        <div className='bg-images'>
            <img src={PurpleStrokeM} alt='' className='paint-bg-m purple-m' />
            <img src={BlueStrokeM} alt='' className='paint-bg-m blue-m' />
            <img src={GreenStrokeM} alt='' className='paint-bg-m green-m' />
            <img src={YellowStrokeM} alt='' className='paint-bg-m yellow-m' />
            <img src={RedStrokeM} alt='' className='paint-bg-m red-m' />
        </div>
    );
};

export default BackgroundImages;
