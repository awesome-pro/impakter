import { SignIn, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='w-full min-h-screen  bg-black bg-[url("/images/signup.jpg")] bg-cover bg-center gap-0'>
       <div className='h-full flex flex-col items-center justify-between min-h-screen w-screen bg-black/60 backdrop-blur-sm'>
        <span className='w-full '>
            <Link href='/'>
              <Image src='/logo.png' width={300} height={80} alt='logo' className='hover:z-20'/>
            </Link>  
          </span>
          <div className='w-screen flex items-center justify-around'>
            <SignIn />
          </div>
          <span className='flex gap-2 text-slate-300 text-xs   mb-5'>
            <Link href='/privacy' className='hover:underline hover:text-white'>
              Privacy
            </Link>
            <Link href='/contact' className='hover:underline hover:text-white'>
            Contact
            </Link>
          </span>
        </div>
    </div>
  )
}