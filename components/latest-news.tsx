import { latestNews } from '@/data'
import React from 'react'
import LatestCard from './latest-card'

function LatestNews() {
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