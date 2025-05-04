import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
     const [news, setNews] = useState([]);
     
     useEffect(() => {
         fetch('/news.json')
             .then(response => response.json())
             .then(data => setNews(data))
             .catch(error => console.error('Error fetching news:', error));
     }, []);

    return (
        <div className='flex justify-center items-center gap-6 bg-gray-100 py-2 px-3'>
           <button className="btn btn-active btn-secondary">Latest</button>  
           <Marquee className='gap-8' speed={100} pauseOnHover>
             {
                news.map((item) => (
                    <div key={item.id} className='flex items-center gap-5'>
                        <h1 className='text-lg font-semibold mr-8'>{item.title} !</h1>
                    </div>
                ))
             }
           </Marquee>
        </div>
    );
};

export default Marque;