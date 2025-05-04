import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news , setNews]= useState([]);

    useEffect(()=>{
        if(id == "0"){
            setNews(data);
        }else if(id == "1"){
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setNews(filteredNews);
        }else{
            const categoryNews = data.filter(category => category.category_id == id);
            setNews(categoryNews);
        }
        
    },[data, id]);
    
    return (
        <div>
            <h1>Category page <span className='font-bold'>{news.length}</span></h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                  news.map(news => <NewsCard key={news.id} news={news}></NewsCard>)  
                }
            </div>
        </div>
    );
};

export default CategoryNews;