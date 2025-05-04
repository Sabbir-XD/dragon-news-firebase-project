import React from 'react';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import FindUs from '../components/FindUs/FineUs';
import Qzone from '../components/Qzone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-4'>
            <SocialLogin/>
            <FindUs/>
            <Qzone />
        </div>
    );
};

export default RightAside;