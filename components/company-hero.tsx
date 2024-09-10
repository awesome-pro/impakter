import { ArrowBigDown } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { DoubleArrowDownIcon } from '@radix-ui/react-icons'

function CompanyHero({name}: {name: string}) {
  return (
    <div className='w-screen object-cover min-h-[660px] flex flex-col items-end' style={{ backgroundImage: "url('/company.png')"}}>
      <div className='w-screen min-h-[660px] backdrop-blur-sm bg-black/40 flex flex-col items-center justify-center'>
      <h1 className='text-white text-6xl font-bold '>
        Is {name} a sustainable company ?
      </h1>
      <Button className='text-white mt-10 hover:bg-primary/50' size={'lg'}>
        Check Analytics Below
      </Button>

      <DoubleArrowDownIcon className='absolute bottom-20 animate-bounce text-white text-6xl font-bold'/>
      </div>
    </div>
  )
}

export default CompanyHero