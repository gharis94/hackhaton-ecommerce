import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props={
    img:string;
    onRight:boolean,
    primaryText:string;
    secondaryText:string;
    isDarkFont:boolean;
    link:string
}

const BannerImage:React.FC<Props> = ({img,onRight,primaryText,secondaryText,isDarkFont,link}) => {
  return (
    <div className='h-[70vh] w-full relative object-cover'>
        <Image src={img} alt='banner' fill/>
        <div 
            className={`absolute 
            ${onRight?'right-10':'left-6'}
            ${isDarkFont?'text-black':'text-white'} 
            sm:top-1/3 space-y-3  top-2/3`}>
            <h2 className='sm:text-2xl md:text-4xl font-extrabold'>{primaryText}</h2>
            <h2 className='sm:text-xl md:text-2xl font-extrabold'>{secondaryText}</h2>
            <Link href={link}>
              <button className='px-4 py-1 bg-primary rounded-md text-black hover:bg-primary/70'>Shop Now</button>
            </Link>
            
        </div>
    </div>
  )
}

export default BannerImage