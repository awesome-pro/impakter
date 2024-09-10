import Link from 'next/link'
import React from 'react'
import SearchBar from './search-bar'
import Heading from './heading'

function HowESGCaculated() {
  return (
    <section className='text-start flex flex-col items-center gap-2 py-20'>
        <Heading title='How ESG is calculated ?'/>
        <h6 className='max-w-[800px]'>
            ESG scores are typically calculated using a combination of quantitative and qualitative data. 
            Quantitative data might include factors like greenhouse gas emissions, water usage, 
            employee turnover, and board diversity. Qualitative data can be derived from company disclosures, 
            news articles, and industry reports.
        </h6>
        <p>Its worth noting that that there is  no way to calculate ESG, but only right methodologies</p>
        <Link href='/esg-score' className='mb-16'>
            <p className='text-blue-600 underline'>IMPAKTER INDEX Methodology </p>
        </Link>
        <SearchBar />
    </section>
  )
}

export default HowESGCaculated