import React from 'react'
import { Separator } from './ui/separator'

type HeadingProps = {
    title: string
}
function Heading(
    { title }: HeadingProps
) {
  return (
    <div className='w-screen text-2xl text-primary font-semibold flex flex-row bg-gradient-to-r from-primary/10 to-primary/5 py-2'>
        <div>
            <Separator orientation='vertical' className='bg-primary w-[5px] rounded-r-xl mr-[10px]'/>
        </div>
        {title}
    </div>
  )
}

export default Heading