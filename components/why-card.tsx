import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import LinkButton from './link-button';
import { Button } from './ui/button';


export interface WhyCardProps {
    title: string;
    image: string;
    description: string;
    points: string[];
    link: string;
}
function WhyCard(
    {title, image, description, points, link}: WhyCardProps
) {
  return (
    <Card className='flex flex-col items-center gap-2 max-w-[450px]'>
        <CardHeader className='cursor-pointer overflow-hidden bg-cover object-cover hover:z-20 hover:shadow-lg text-primary w-full h-[250px]' style={{ backgroundImage: `url(${image})`}}>
            <h1 className='text-2xl text-primary font-semibold'>{title}</h1>
        </CardHeader>
        <CardContent className='text-sm text-start'>
            <h2 className=' font-semibold'>{description}</h2>
            <ul className='text-start mt-1'>
                {points.map((point, index) => (
                    <li key={index} className='list-decimal '>{point}</li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className='items-start'>
            <Button className='text-primary hover:bg-white/20 hover:text-primary' variant={'outline'}>
                Learn More
            </Button>
        </CardFooter>
    </Card>
  )
}

export default WhyCard