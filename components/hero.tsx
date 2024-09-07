import React from 'react'
import SearchBar from './search-bar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { Button } from './ui/button';

function Hero() {
  return (
    <section className="bg-cover bg-center w-screen lg:min-h-[660px] -mt-20 flex flex-col items-center justify-center " >
      
      <h1 className='text-6xl text-white font-bold'>
        ESG Rating 
        <span className='text-primary/80'>Sustainability Report</span>
      </h1>
      <div className='flex items-center justify-center w-full gap-20'>
        <Button size='lg' className='border-none rounded-l-none rounded-full text-white'>
           Check ESG Index
        </Button>
        <Button size='lg' className='border-none rounded-l-none rounded-full' variant={'outline'}>
           Get Certified
        </Button>
      </div>
    </section>
  )
}

export default Hero