import React from 'react';
import swimming from '../../pic/swimming.png';
import classpic from '../../pic/class.png';
import groundpic from '../../pic/playground.png';

const Qzone = () => {
    return (
        <div>
         <h2 className="text-2xl font-semibold mb-4">Q-zone</h2>
         <div className='space-y-5'>
            <img src={swimming} alt="" />
            <img src={classpic} alt="" />
            <img src={groundpic} alt="" />
         </div>
      </div>
    );
};

export default Qzone;