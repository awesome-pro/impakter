import CompanyHero from '@/components/company-hero'
import Overview from '@/components/company/overview'
import Report from '@/components/company/report'
import CompanySearch from '@/components/company/search'
import LatestNews from '@/components/latest-news'
import React from 'react'

function Page({params }: {params: {id: string}}) {
  return (
    <section>
        <CompanyHero name={params.id}/>
        <div className='flex justify-center gap-5 bg-white px-8 py-10'>
            <div className='w-[400px] bg-slate-100 px-2 pl-4 pt-5 mb-2 ml-23'>
                <h1 className='text-md font-semibold'>
                    Table of Contents
                </h1>
                <ul className='text-gray-600 list-inside  gap-2 flex flex-col mt-3 '>
                    <li>
                        <a href='#certificate'>Certificates</a>
                    </li>
                    <li>
                        <a href='#esg'>ESG Rating</a>
                    </li>
                    <li>
                        <a href='#news'>News</a>
                    </li>
                    <li>
                        <a href='#financials'>Financials</a>
                    </li>
                    <li>
                        <a href='#competitors'>Competitors</a>
                    </li>
                </ul>
            </div>
            <div className='w-fit h-full flex flex-col items-start justify-between'>
                <Overview />
                <Report />
            </div>
        </div>
        <CompanySearch />
        <LatestNews />
    </section>
  )
}

export default Page