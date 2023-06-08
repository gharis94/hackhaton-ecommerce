'use client'
import React from 'react'
import {useSession,signIn} from 'next-auth/react';

const page = () => {
    const {data:session,status} = useSession();
    console.log(session,status)
    
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='bg-white flex flex-col px-4 py-10 rounded-md min-h-[28rem] min-w-[24rem] drop-shadow-md'>
            <h2>Sign In</h2>
            <button onClick={()=>signIn()}>Sign In With Github</button>
        </div>
    </div>
  )
}

export default page