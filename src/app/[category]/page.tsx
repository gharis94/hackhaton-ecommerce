'use client'
import React from 'react'
import  {usePathname}  from 'next/navigation'
import HomeProductComponent from '@/components/HomeProductComponent';



const page = () => {
  const path = usePathname();
  console.log(path)
  return (
    <div className='max-w-[1250px] mx-auto'>
      <h1>{path}</h1>
      <div className=' grid grid-cols-4 gap-4'>
        {
          [1,2,3,4,5,6,7,6].map(item=>(
            <HomeProductComponent/>
          ))
        }
      </div>
    </div>
  )
}

export default page