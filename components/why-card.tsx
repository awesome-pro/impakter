import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import LinkButton from './link-button';


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
        <CardHeader className='text-start'>
            <h1 className='text-2xl text-primary font-semibold'>{title}</h1>
            <Image src={image} width={200} height={100} alt={title} />
        </CardHeader>
        <CardContent className='text-sm'>
            <h2>{description}</h2>
            <ul className='text-start text-sm ml-8 mt-5'>
                {points.map((point, index) => (
                    <li key={index} className='list-disc list-item text-xs'>{point}</li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className='items-start'>
            <LinkButton href={link}>
                Learn More
            </LinkButton>
        </CardFooter>
    </Card>
  )
}

export default WhyCard