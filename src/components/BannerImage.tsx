import React from 'react'
import Image from 'next/image'

type Props={
    img:string;
    onRight:boolean,
    primaryText:string;
    secondaryText:string;
    isDarkFont:boolean
}

const BannerImage:React.FC<Props> = ({img,onRight,primaryText,secondaryText,isDarkFont}) => {
  return (
    <div className='h-[70vh] w-full relative object-cover'>
        <Image src={img} alt='banner' fill/>
        <div 
            className={`absolute 
            ${onRight?'right-10':'left-6'}
            ${isDarkFont?'text-black':'text-white'} 
            top-1/3 space-y-3 `}>
            <h2 className='sm:text-2xl md:text-4xl font-extrabold'>{primaryText}</h2>
            <h2 className='sm:text-xl md:text-2xl font-extrabold'>{secondaryText}</h2>
            <button className='px-4 py-1 bg-primary rounded-md text-black hover:bg-primary/70'>Shop Now</button>
        </div>
    </div>
  )
}

export default BannerImage