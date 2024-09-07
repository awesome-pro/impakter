import React from 'react'
import WhyCard, { WhyCardProps } from './why-card'

function WhyImportant() {
  return (
    <section className='text-center flex flex-col items-center gap-2 py-20 bg-white z-5 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Why is ESG Index important?</h1>
        <p className='max-w-[940px]'>
            ESG indexes are crucial because they provide a standardized way to measure and track 
            the sustainability performance of companies, and thus help all stakeholders identify 
            those ones with overall positive impact.
        </p>
        <div className='flex items-center justify-around gap-20 mt-10'>
            {whyCardLists.map((card, index) => {
                return (
                    <WhyCard key={index} {...card} />
                )
            })}
        </div>
    </section>
  )
}

export default WhyImportant

const whyCardLists: WhyCardProps[] = [
    {
        title: "For Consumers",
        image: "/images/for-consumers.jpg",
        description: "For consumers, ESG indexes are a great way to identify companies that align with their values.",
        points: [
            "Find companies that are environmentally friendly",
            "Find companies that treat their employees well",
            "Find companies that are ethical in their business practices",
        ],
        link: "/for-consumers",
    },
    {
        title: "For Businesses",
        image: "/images/for-businesses.jpg",
        description: "For businesses, ESG indexes can help identify areas where they can improve their sustainability performance.",
        points: [
            "Identify areas where they can reduce their environmental impact",
            "Identify areas where they can improve employee satisfaction",
            "Identify areas where they can improve their ethical practices",
        ],
        link: "/for-businesses",
    },
]