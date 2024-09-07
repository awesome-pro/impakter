import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
  

export interface LatestCardProps {
    title: string
    description: string
    image: string
    date: string
    linkTitle: string
    link: string
}

const LatestCard = (
    { title, description, image, date, linkTitle, link }: LatestCardProps
) => {
  return (
    <Card className='overflow-hidden'>
        <CardContent>
            <Image src={image} alt={title} width={300} height={250} className='bg-cover object-fill'/>
        </CardContent>
        <CardFooter className='flex flex-col items-start'>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <CardDescription className='text-sm'>{description}</CardDescription>
            <p className='text-xs'>{date}</p>
            <Link href={link} className='hover:underline-offset-2 hover:text-blue-600'>
                {linkTitle}
            </Link>
        </CardFooter>
    </Card>

  )
}

export default LatestCard