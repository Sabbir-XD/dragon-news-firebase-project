import React from 'react';
import logo from '../../pic/logo.png';
import moment from 'moment';
const Header = () => {
    const currentTime = moment().format('dddd, MMMM Do, YYYY');
    return (
        <div className='justify-items-center space-y-2'>
            <img className='w-[400px]'  src={logo} alt=""/>
            <p className='text-gray-600 text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-gray-800 text-lg'>{currentTime}</p>
        </div>
    );
};

export default Header;