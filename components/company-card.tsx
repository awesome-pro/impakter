import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'

export interface CompanyCardProps {
    companyName: string
    companyESGScore: number
    logoUrl: string
}

function CompanyCard({companyESGScore, companyName, logoUrl}: CompanyCardProps) {
  return (
    <Card className='flex flex-col items-center gap-2'>
        <CardContent>
            <Image src={logoUrl} width={100} height={100} alt={companyName} />
        </CardContent>
        <CardFooter>
            <CardTitle>{companyName}</CardTitle>
            <CardTitle>{companyESGScore}</CardTitle>
        </CardFooter>
    </Card>
  )
}

export default CompanyCard