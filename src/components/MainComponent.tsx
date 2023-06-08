import React from 'react';
import Image from 'next/image';

const MainComponent = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4 h-[80vh] '>
        <div className='col-span-1 row-span-2 relative overflow-hidden rounded-md drop-shadow-md '>
          <Image src='https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='picture' fill/>
          <div className='absolute bg-opacity-0 h-full w-full transition-all duration-300 hover:bg-opacity-80 bg-primary inset-0 flex justify-center items-center group'>
            <div className='h-1/3 w-1/2 border-[6px] border-white flex flex-col justify-center transition-all delay-150 duration-300 items-center opacity-0 group-hover:opacity-100'>
                <h2 className='text-2xl font-semibold text-white'>SHOES</h2>
                <p className='font-extrathin text-white'>SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 row-span-1 relative overflow-hidden rounded-md drop-shadow-md'>
          <Image src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='picture' fill/>
          <div className='absolute bg-opacity-0 h-full w-full transition-all duration-300 hover:bg-opacity-80 bg-primary inset-0 flex justify-center items-center group'>
            <div className='h-1/2 w-1/2 border-[6px] border-white flex flex-col justify-center transition-all delay-150 duration-300 items-center opacity-0 group-hover:opacity-100'>
                <h2 className='text-2xl font-semibold text-white'>Men</h2>
                <p className='font-extrathin text-white'>SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 row-span-1 relative overflow-hidden object-cover rounded-md drop-shadow-md'>
          <Image src='https://images.unsplash.com/photo-1607784750393-5edbcd13fc36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' fill alt='pic'/>
          <div className='absolute bg-opacity-0 h-full w-full transition-all duration-300 hover:bg-opacity-80 bg-primary inset-0 flex justify-center items-center group'>
            <div className='h-1/2 w-1/2 border-[6px] border-white flex flex-col justify-center transition-all delay-150 duration-300 items-center opacity-0 group-hover:opacity-100'>
                <h2 className='text-2xl font-semibold text-white'>Women</h2>
                <p className='font-extrathin text-white'>SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className='col-span-2 row-span-1 overflow-hidden  relative rounded-md drop-shadow-md'>
          <Image className='object-cover object-bottom' src='https://images.unsplash.com/photo-1476950743170-ab77e7d4d82e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=911&q=80' fill alt='picture'/>
          <div className='absolute bg-opacity-0 h-full w-full transition-all duration-300 hover:bg-opacity-80 bg-primary inset-0 flex justify-center items-center group'>
            <div className='h-1/2 w-1/2 border-[6px] border-white flex flex-col justify-center transition-all delay-150 duration-300 items-center opacity-0 group-hover:opacity-100'>
                <h2 className='text-2xl font-semibold text-white'>KIDS</h2>
                <p className='font-extrathin text-white'>SHOP NOW</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainComponent