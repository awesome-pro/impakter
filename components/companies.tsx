import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Companies({className}: {className?: string}) {
  return (
    <section className='absolute bottom-0 bg-transparent flex text-center items-center justify-start gap-20 pl-10 w-screen  bg-gradient-to-b from-primary/5 to-primary/70'>
      <span>
        <h2 className='text-3xl font-bold text-white'>Trusted by</h2>
        <h3 className='text-white font-serif'>World's Best Companies</h3>
      </span>
        <div className='flex gap-16 items-baseline justify-evenly'>
            {companies.map((company) => (
              <Link href={company.website} target='_blank'>
               <Image src={company.logo} width={60} height={30} alt="logo" className="hover:z-20"/>
              </Link>
            ))}
        </div>
    </section>
  )
}

export default Companies


type Company = { 
  logo: string;
  website: string;
}

const companies: Company[] = [
  {
    logo: "/companies/bawag.png",
    website: "https://google.com"
  },
  {
    logo: "/companies/hypo.png",
    website: "https://amazon.com"
  },
  {
    logo: "/companies/tirol.png",
    website: "https://facebook.com"
  },
  {
    logo: "/companies/raiff.png",
    website: "https://apple.com"
  },
  {
    logo: "/companies/schoe.png",
    website: "https://microsoft.com"
  },
  {
    logo: "/companies/volksbank.png",
    website: "https://tesla.com"
  },
  {
    logo: "/companies/wiener.png",
    website: "https://tesla.com"
  },
]