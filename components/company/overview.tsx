import Image from 'next/image'
import React from 'react'

function Overview() {
  return (
    <section className='w-full'>
        <div className='card text-start bg-slate-100 px-6 py-4'>
            <h1 className='text-2xl font-semibold -ml-3'>
                Allianz Sustainability: Overview
            </h1>
            <ul className='list-disc'>
                <li>The ESG score of Allianz is A on the IMPAKTER INDEX as of July, 2024. </li>
                <li>The company’s latest sustainability report was filed in January, 2024.</li>
                <li>Some of the major ESG certificates that Allianz currently holds is ISO 9001.</li>
                <li>Allianz has been audited by the MSCI rating index, and was declared ‘sustainable’. </li>
            </ul>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 w-full'>
                <span className='text-end'>
                    <Image src='/all.png' alt='Certificate 1' width={60} height={0} className='w-full overflow-clip'/>
                </span>
                <h4 className='text-lg font-semibold'>
                    How Sustainable is <span className='underline'>Allianz?</span>
                </h4>
                <Image src='/image.png' alt='Certificate 1' width={326} height={184} className='overflow-clip'/>
                <span className='w-[409px] h-[1px] bg-black px'></span>
                <span className='text-center mt-3' >
                    <Image src='/iso.png' alt='Certificate 1' width={67} height={67} />
                </span>
                <div className='flex items-center justify-between text-xs gap-10 mt-20'>
                    <Image src='/logo.png' alt='Certificate 1' width={139} height={11}/>
                    <p>*visit impakter.com/index for details</p>
                </div>
        </div>
    </section>
  )
}

export default Overview