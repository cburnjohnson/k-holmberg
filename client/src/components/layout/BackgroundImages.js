import React from 'react';
import YellowStrokeM from '../../images/background/yellow-mobile.png';
import PurpleStrokeM from '../../images/background/purple-mobile.png';
import GreenStrokeM from '../../images/background/green-mobile.png';
import RedStrokeM from '../../images/background/red-mobile.png';
import BlueStrokeM from '../../images/background/blue-mobile.png';

import PurpleStrokeD from '../../images/background/purple-desktop.png';
import YellowStrokeD from '../../images/background/yellow-desktop.png';
import BlueStrokeD from '../../images/background/blue-desktop.png';
import GreenStrokeD from '../../images/background/green-desktop.png';
import OrangeStrokeD from '../../images/background/orange-desktop.png';

const BackgroundImages = () => {
    return (
        <div className='bg-images'>
            <img src={PurpleStrokeM} alt='' className='paint-bg-m purple-m' />
            <img src={BlueStrokeM} alt='' className='paint-bg-m blue-m' />
            <img src={GreenStrokeM} alt='' className='paint-bg-m green-m' />
            <img src={YellowStrokeM} alt='' className='paint-bg-m yellow-m' />
            <img src={RedStrokeM} alt='' className='paint-bg-m red-m' />

            <img src={PurpleStrokeD} alt='' className='paint-bg-d purple-d' />
            <img src={YellowStrokeD} alt='' className='paint-bg-d yellow-d' />
            <img src={BlueStrokeD} alt='' className='paint-bg-d blue-d' />
            <img src={GreenStrokeD} alt='' className='paint-bg-d green-d' />
            <img src={OrangeStrokeD} alt='' className='paint-bg-d orange-d' />
        </div>
    );
};

export default BackgroundImages;
