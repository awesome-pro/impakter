"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Certificate() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
   <section className=''>
      <h1 className='text-2xl font-semibold ml-5 mb-5'>
        See if your company has a popular ESG Certificate
      </h1>
      <div className='grid lg:grid-cols-3 gap-x-5 gap-y-10 items-center justify-between'>
        {certificates.map((certificate, index) => (
          <Link key={index} className='card' href={certificate.link}>
            <div className='flex flex-col items-start justify-center rounded-lg bg-green-200 p-5'>
              <Image src={certificate.image} alt={certificate.title} width={200} height={0} className='w-full overflow-clip'/>
              <h2 className='text-sm'>{certificate.title}</h2>
            </div>
              
          </Link>
        ))}
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