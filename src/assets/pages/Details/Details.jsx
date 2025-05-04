import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useLoaderData, useParams } from 'react-router';
import RightAside from '../../layout/RightAside';

const Details = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const news = data.find((news) => news.id == id);
    console.log(news);
    return (
        <div className='w-11/12 mx-auto mt-5'>
            <Navbar />
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-9 p-8 bg-gray-50 rounded-2xl shadow-lg'>
                <img src={news?.thumbnail_url} alt="" className='w-full h-96 object-cover rounded-xl' />
                <h2 className='text-3xl font-bold my-5'>{news?.title}</h2>
                <p className='text-gray-500 text-lg font-medium'>{news?.details}</p>
                <Link to="/" className="btn btn-active btn-secondary my-5">All news in this category</Link>

                </div>
                <div className='col-span-3'>
                    <RightAside />
                </div>
            </div>
        </div>
    );
};

export default Details;