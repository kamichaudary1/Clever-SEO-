import React from 'react'

interface FormTitleProps {
  title?: string;
  subTitle?: string;
  tagline: string;
}

export default function FormTitle({title, subTitle, tagline}:FormTitleProps) {
  return (
    <div className='flex justify-center flex-wrap mb-7'>
        <span className='text-[#1b2b1b] text-[28px] font-semibold'>{ title }
            <span className='text-[#5DA389] pl-1'>{ subTitle }</span>
        </span>
        <span className='text-[#1b2b1b] text-[15px] font-normal text-center md:mx-12'>{tagline}</span>
    </div>
  )
}
