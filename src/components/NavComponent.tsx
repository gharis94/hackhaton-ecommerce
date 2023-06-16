'use client'
import React, { useCallback, useState } from 'react'
import Search from './Search'
import Cart from './Cart'
import {useSession,signIn,signOut} from'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { client } from '@/lib/client';

//@ts-ignore
const fetcher = (...args) =>{
    console.log(...args)
  //@ts-ignore
  return (client.fetch(...args))}

const NavComponent = () => {
  const {data,error,isLoading} = useSWR(`*[_type=='categories']{_id,category}`,fetcher)
  const {data:session,status}= useSession()
  const [isOpen,setIsOpen] = useState(false)
  const router = useRouter();
  
  console.log(session)
  const handleNavigate=useCallback((path:string)=>{
    setIsOpen(false)
    router.push(path)
  },[])

  return (
    <nav className='w-full px-2 sm:px-10 grid grid-cols-4 md:grid-cols-6 z-20 bg-white drop-shadow-lg h-[4rem] md:h-[3rem] relative'>
        <div className='col-span-1 sm:col-span-1 flex items-center cursor-pointer' onClick={()=>handleNavigate('/')}>Logo</div>
        <div className='hidden md:col-span-2 md:flex justify-evenly items-center '> 
          {!isLoading && data.map((item:{_id:string,category:string})=>(
            <p onClick={()=>handleNavigate(item.category)} className='cursor-pointer hover:text-primary' key={item._id} >{item.category}</p>
          ))}
        </div> 
        {/* <div className='col-span-2 flex items-center w-full '>
          <Search/>
        </div> */}
        <div className='col-span-3 w-full flex items-center space-x-2 sm:space-x-10 justify-end'>
          
          <Cart click={handleNavigate} user={session?.user?.email}/>
          <div className={`px-4 py-1 border-[1px] hover:border-primary rounded-full cursor-pointer `}>
            {
             status==='authenticated'? (
              <div onClick={()=>setIsOpen(!isOpen)} className='flex items-center space-x-2'>
                <p>{session?.user?.name}</p>
                <Image src={`${session?.user?.image}`} className='rounded-full' alt='user image' width={30} height={30}/>
              </div>
             ):<p onClick={()=>signIn()}>Sign In?</p>
            }
            
          </div>
        </div>
        { <div className={`absolute top-14 sm:top-10 right-10 sm:right-24 rounded-md  bg-white transition-all duration-700  ${isOpen?'sm:max-h-[6rem] opacity-100':'h-0 opacity-0'}  w-[12rem] text-nowrap overflow-hidden `}>
          <div className='md:hidden  flex flex-col justify-evenly items-center '> 
          {!isLoading && data.map((item:{_id:string,category:string})=>(
            <p onClick={()=>handleNavigate(item.category)} className='cursor-pointer hover:bg-primary/60 px-4 py-2 w-full' key={item._id} >{item.category}</p>
          ))}
        </div> 
          <p className='hover:bg-primary/60 px-4 py-2 cursor-pointer' onClick={()=>handleNavigate('/orders')}>Manage Orders</p>
          <p className='hover:bg-primary/60 px-4 py-2 cursor-pointer' onClick={()=>signOut()}>Sign Out</p>
        </div>}
    </nav>
  )
}

export default NavComponent