import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const LookingForESG = () => {
  return (
    <section className='flex flex-col items-center justify-around bg-primary/20 py-12 gap-11 text-center'>
            <h1 className='text-3xl font-semibold text-blue-700'>
                Looking for an ESG solution <br />for your business?
            </h1>

            <div className='flex items-center justify-center gap-5 lg:gap-12 w-screen'>
               <Link href='/contact'>
                    <Button size='lg' variant={'outline'}>
                      Free ESG Rating
                    </Button>
                </Link>

                <Link href='/pricing'>
                    <Button size='lg'>
                      Book a Demo
                    </Button>
                </Link>
            </div>
    </section>
  )
}

export default LookingForESG