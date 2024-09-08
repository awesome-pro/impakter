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

function Hero() {


  return (
    <section className='w-full relative min-h-[750px] bg-cover bg-center flex flex-col items-start' style={{ backgroundImage: "url(/hero-5.jpg)"}}>
        <h1 className='text-white text-[60px] font-bold mt-20 ml-10'>
          ESG Rating <br />
          <span className=''>Sustainability Report & </span>
          <br />
          ISO Certificate
          
        </h1>

        <div className='flex gap-16 items-start mt-10 ml-10'>
          <Link href='/companies/google'>
            <Button className='' size={'lg'}>
                Get ESG Rating 
            </Button>
          </Link>
          <Link href='/companies/google'>
            <Button className='hover:bg-white/20 text-white' size={'lg'} variant={'outline'}>
                  Learn More
              </Button>
          </Link>     
        </div>

        <Companies />
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