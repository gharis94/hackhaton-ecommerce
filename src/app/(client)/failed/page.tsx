'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {GiCancel} from 'react-icons/gi'


const Failed = () => {
    const router = useRouter()
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-[28rem] w-[36rem] grid grid-rows-4 bg-white rounded-md drop-shadow-md place-items-center border-[1px] border-neutral-400'>
            <div className='row-span-3 h-full flex flex-col justify-evenly items-center'>
                <div className='p-4 h-[4rem] w-[4rem] bg-primary flex justify-center items-center rounded-full'>
                    <GiCancel className='text-red-500' size={50}/>
                </div>
                <h2>Sorry We cannot proceed your payment at the moment</h2>
            </div>
            <div className='row-span-1'>
                <button onClick={()=>router.replace('/')} className='bg-primary rounded-md px-4 py-1 hover:bg-primary/70'>Back To Home Page</button>
            </div>
        </div>
    </div>
  )
}

export default Failed