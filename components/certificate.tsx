"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './heading';


function Certificate() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <section className='w-full relative'>
    <Heading title='See if your company has a popular ESG Certificate?'/>
    {/* Wrapper around the slider */}
    <div className="relative">
      {/* Left blurry shadow */}
      <div className="absolute top-0 left-0 h-full w-[500px] bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right blurry shadow */}
      <div className="absolute top-0 right-0 h-full w-[500px] bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none"></div>
  
      {/* Slider */}
      <Slider {...settings} centerMode={true}>
        {certificates.map((certificate, index) => (
          <Link key={index} href={certificate.link} className='flex flex-col items-center justify-center m-5'>
            <Image src={certificate.image} alt={certificate.title} width={300} height={200}/>
            <h2 className='text-sm'>{certificate.title}</h2>
          </Link>
        ))}
      </Slider>
    </div>
  </section>
  
  )
}

export default Certificate



const certificates = [
  {
    image: '/certificates/certificate-1.png',
    title: 'Certificate 1',
    link: '/certificate-1'
  },
  {
    image: '/certificates/certificate-2.png',
    title: 'Certificate 2',
    link: '/certificate-2'
  },
  {
    image: '/certificates/certificate-3.png',
    title: 'Certificate 3',
    link: '/certificate-3'
  },
  {
    image: '/certificates/certificate-4.png',
    title: 'Certificate 4',
    link: '/certificate-4'
  },
  {
    image: '/certificates/certificate-5.png',
    title: 'Certificate 5',
    link: '/certificate-5'
  },
  {
    image: '/certificates/certificate-6.png',
    title: 'Certificate 6',
    link: '/certificate-6'
  },
  {
    image: '/certificates/certificate-7.png',
    title: 'Certificate 7',
    link: '/certificate-7'
  },
  {
    image: '/certificates/certificate-8.png',
    title: 'Certificate 8',
    link: '/certificate-8'
  },
  {
    image: '/certificates/certificate-9.png',
    title: 'Certificate 9',
    link: '/certificate-9'
  },
  {
    image: '/certificates/certificate-10.png',
    title: 'Certificate 10',
    link: '/certificate-10'
  }
]