'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import {TiTick} from 'react-icons/ti'


const Success = () => {
    const router = useRouter()
    const {data:session,status} = useSession()
    useEffect(()=>{
        const fn =async()=>{
            // const q =
            try{
                const rsp = await fetch(`/api/cart?email=${session?.user?.email}`,{
                    method:"DELETE"
                })
                console.log(rsp)
            }catch(error:any){
            console.log(error.message)
            }
        }
        if(status === 'authenticated'){
            console.log('aaa')
            fn()
        }
    },[session,status])
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-[28rem] w-[36rem] grid grid-rows-4 bg-white rounded-md drop-shadow-md place-items-center border-[1px] border-neutral-400'>
            <div className='row-span-3 h-full flex flex-col justify-evenly items-center'>
                <div className='p-4 h-[4rem] w-[4rem] bg-primary flex justify-center items-center rounded-full'>
                    <TiTick className='text-green-500' size={50}/>
                </div>
                <h2 className='text-2xl'>Thank you</h2>
            </div>
            <div className='row-span-1 w-full flex justify-evenly'>
                <button onClick={()=>router.replace('/')} className='bg-primary rounded-md px-4 w-[14rem] py-1 hover:bg-primary/70'>Back To Home Page</button>
                <button onClick={()=>router.replace('/orders')} className='bg-primary rounded-md w-[14rem] px-4 py-1 hover:bg-primary/70'>Manage orders</button>
            </div>
        </div>
    </div>
  )
}

export default Success