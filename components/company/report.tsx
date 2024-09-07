import { Cross2Icon } from '@radix-ui/react-icons';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import LinkButton from '../link-button';

function Report() {
  return (
        <div className='flex flex-col gap-4 p-4'>
            {reportData.map((data, index) => (
                <ReportCard key={index} question={data.question} answer={data.answer} />
            ))}

            <div className='card bg-gray-100'>
                <h1 className='text-xl font-semibold'>Latest Activity by Allianz</h1>
                <div className='flex items-center justify-around py-7 gap-5'>
                    <Image src='/tweet.png' alt='logo' width={317} height={194} />
                    <Image src='/tweet.png' alt='logo' width={317} height={194} />
                    <Image src='/tweet.png' alt='logo' width={317} height={194} />
                </div>
            </div>

            <div className='card bg-slate-100'>
                <p>First, consider that Allianz is from the finance industry, running from France with ESG rating o</p>
                <br />
                <br />
                <p>
                    Then, per our research, of the 20 most popular active companies in the finance industry in France, 
                    they can be grouped in the ESG score of: 4 are A-rated, 10 are B-rated, 3 are C-rated, 3 are D-rated, 
                    and none is F-rated.
                </p>
                <br />
                <br />
                <p>
                    Leaning, Allianz ranks among the 20% of the most sustainable companies in its industry
                </p>
            </div>

            <div className='card bg-slate-100'>
                <span className='flex items-center justify-between w-full'>
                    <h1 className='text-2xl font-semibold '>
                        Does Allianz have an *IMPAKTER PRO Badge?
                    </h1>
                    <Image src='/cross.png' alt='logo' width={73} height={73} />
                </span>
            </div>

            <div className='card bg-slate-100'>
                <span className='flex items-center justify-between w-full'>
                    <h1 className='text-2xl font-semibold'>
                        Will you considering buying from Allianz?
                    </h1>
                    <span className='flex items-center justify-between gap-2'>
                        <ThumbsUpIcon size={56} className='text-teal-500'/>
                        <span className='w-[1px] h-[56px] bg-black'>
                        </span>
                        <ThumbsDownIcon size={56} className='text-red-500'/>
                    </span>
                </span>
            </div>

            <div className='card'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-lg font-bold'>
                        Belong to the Allianz company, and want to get the IMPAKTER PRO Badge?  
                        </h2>
                        <p>
                        Earn an IMPAKTER PRO Badge for your ESG efforts, and showcase it to attract environmentally conscious customers and investors
                        </p>
                    </div>
                </div>
            </div>

            <div className='card bg-slate-100'>
                <h1 className='h2 mb-6'>
                    Alternative sustainable companies of Allianz in the French finance industry
                </h1>
                <div className='grid grid-cols-2 items-center justify-center w-full gap-7'>
                    <Button className='w-full bg-white' variant={'secondary'}>
                        HDFC Bank
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                        HDFC Bank
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                        HDFC Bank
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                        HDFC Bank
                    </Button>
                </div>
                <span className='text-center w-full mt-5'>
                    <LinkButton href='/companies'>
                        Search and compare ESG score of more companies like Allianz 
                    </LinkButton>
                </span>
            </div>

            <div className='card bg-slate-100'>
                <h1 className='h2 mb-10'>
                    Alternative sustainable companies of Allianz in the French finance industry
                </h1>
                <div className='grid grid-cols-2 items-center justify-center w-full gap-7'>
                    <Button className='w-full bg-white' variant={'secondary'}>
                        ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                    <Button className='w-full bg-white' variant={'secondary'}>
                    ESG Scoring
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default Report


interface ReportCardProps {
    question: string;
    answer: string;
}

function ReportCard({question, answer}: ReportCardProps) {
  return (
    <div className='card bg-primary/20'>
        <h2 className='text-xl font-semibold'>{question}</h2>
        <p className='text-sm'>{answer}</p>
    </div>
  )
}

const reportData: ReportCardProps[] = [
    {
        question: "What is the sustainability policy of Allianz?",
        answer: "We want to integrate sustainability fully into our core business and decision-making processes, building on the foundations of the Allianz Group's ESG Integration Framework. We empower employees around the world to be informed and act with year-round ESG trainings and volunteering."
    },
    {
        question: "s Allianz an ethical company?",
        answer: "We want to integrate sustainability fully into our core business and decision-making processes, building on the foundations of the Allianz Group's ESG Integration Framework. We empower employees around the world to be informed and act with year-round ESG trainings and volunteering."
    },
    {
        question: "What is the ESG score of Allianz?",
        answer: "The ESG score of Allianz is A on the IMPAKTER INDEX as of July, 2024."
    },
    {
        question: "What are the major ESG certificates that Allianz currently holds?",
        answer: "Some of the major ESG certificates that Allianz currently holds is ISO 9001."
    },
    {
        question: "Has Allianz been audited by any rating index?",
        answer: "Allianz has been audited by the MSCI rating index, and was declared ‘sustainable’."
    }
]