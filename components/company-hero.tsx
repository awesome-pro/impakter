import { ArrowBigDown } from 'lucide-react'
import React from 'react'

function CompanyHero({name}: {name: string}) {
  return (
    <div className='w-screen object-cover min-h-[660px] flex flex-col items-end' style={{ backgroundImage: "url('/company.png')"}}>
      <div className='min-w-1/2'>
      <h1 className='text-white text-6xl font-bold mt-48'>
        Is {name} a sustainable company?
      </h1>
      <h4 className='text-lg font-semibold text-white'>
        Check ESG Results Below<ArrowBigDown />
      </h4>
      </div>
    </div>
  )
}

export default CompanyHero