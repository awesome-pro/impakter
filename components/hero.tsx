"use client";

import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from './ui/button';
import Link from 'next/link';
import Companies from './companies';
import FindESGbyCountry from './find-esg-by-country';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';

function Hero() {


  return (
    <section className='relative w-full h-screen bg-cover bg-center backdrop-blur-xl' style={{ backgroundImage: "url(/images/signup.jpg)"}}>
        <div className='relative min-w-screen h-screen  bg-black/40 flex flex-col items-center justify-center z-20 text-center'>
            <h1 className='text-white text-[70px] font-bold mt-20 text-center'>
              ESG Rating Sustainability Report &
              <br />
              ISO Certificates
            </h1>

                <div className='flex gap-16 items-start mt-10 ml-10'>
                <Link href='/companies/google'>
                  <Button className='text-white' size={'lg'}>
                      Get ESG Rating 
                  </Button>
                </Link>
                <Link href='/companies/google'>
                  <Button className='hover:bg-white/20 text-white border-white/20' size={'lg'} variant={'outline'}>
                        Get Certified
                    </Button>
                </Link>    
            </div>

            <DoubleArrowDownIcon className='absolute bottom-20 animate-bounce text-white text-6xl font-bold'/>
            <Companies className='absolute bottom-0'/>
        </div>
    </section>
  )
}

export default Hero

const heroCarousel = [
  {
    image: "/hero-1.png",
  },
  {
    image: "/hero-2.png",
  },
  {
    image: "/hero-3.png",
  },
]