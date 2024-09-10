import React from 'react'
import { Button } from './ui/button'
import Heading from './heading'

function Find() {
  return (
    <section className='flex flex-col items-center justify-center my-20'>
        <Heading title='How to find ESG Score?'/>
        <h3>
         Use the Free ESG Score search widget of IMPAKTER INDEX
        </h3>
        <h2 className='text-center max-w-[900px]'>
            Frankly, finding a company&apos;s ESG score can be tricky and time-consuming because one needs to factor in various reports, data, and legal obligations. With IMPAKTER INDEX, our sustainability experts have done this for 1000s of European companies - across industries - for anyone to view their favorite brand’s sustainability performance; and compare it with alternative brands to make an informed purchase decision. 
            Completely FREE!
        </h2>
        
        <Button variant={'link'} className='mt-4'>
            Completely FREE!
        </Button>
    </section>

  )
}

export default Find