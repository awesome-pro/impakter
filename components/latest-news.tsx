"use client";

import { latestNews } from '@/data'
import React from 'react'
import LatestCard from './latest-card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function LatestNews() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };



  return (
    <div className='bg-white p-10'>
        <h1 className='text-2xl font-bold my-1 ml-5'>Latest in the world of ESG</h1>
        <div className='flex items-center justify-around gap-2 p-4'>
            {latestNews.map((news) => (
                <LatestCard key={news.title} {...news} />
            ))}
        </div>

    </div>
  )
}

export default LatestNews