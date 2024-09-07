import Link from 'next/link'
import React from 'react'

function HowESGCaculated() {
  return (
    <section className='text-center flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-semibold'>How ESG is calculated ?</h1>
        <h6 className='max-w-[800px]'>
            ESG scores are typically calculated using a combination of quantitative and qualitative data. 
            Quantitative data might include factors like greenhouse gas emissions, water usage, 
            employee turnover, and board diversity. Qualitative data can be derived from company disclosures, 
            news articles, and industry reports.
        </h6>
        <p>Its worth noting that that there is  no way to calculate ESG, but only right methodologies</p>
        <Link href='/esg-score'>
            <p className='text-blue-600 underline'>IMPAKTER INDEX Methodology </p>
        </Link>
    </section>
  )
}

export default HowESGCaculated