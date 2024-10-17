import React from 'react'

interface FormTitleProps {
    tagline: string;
}

export default function FormTitle({tagline}:FormTitleProps) {
  return (
    <div className='flex justify-center flex-wrap mb-7'>
        <span className='text-[#1b2b1b] text-[28px] font-semibold'>Welcome to
            <span className='text-[#5DA389] pl-1'>CleverSEO</span>
        </span>
        <span className='text-[#1b2b1b] text-[15px] font-normal'>{tagline}</span>
    </div>
  )
}
