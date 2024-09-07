import React from 'react'

function CompanyHero({name}: {name: string}) {
  return (
    <div className='w-screen object-cover min-h-[660px] flex flex-col items-end' style={{ backgroundImage: "url('/company.png')"}}>
      <h1 className='text-white text-6xl font-bold mt-48 ml-20'>
        Is {name} a sustainable company?
      </h1>
    </div>
  )
}

export default CompanyHero