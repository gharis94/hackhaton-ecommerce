'use client'
import React, { useCallback, useState } from 'react'
import Search from './Search'
import Cart from './Cart'
import {useSession,signIn,signOut} from'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavComponent = () => {
  const {data:session,status}= useSession()
  // const sesseion ={user:null}
  // const status='loading'
  const [isOpen,setIsOpen] = useState(false)
  const router = useRouter();
  
  console.log('a')
  const handleNavigate=useCallback((path:string)=>{
    setIsOpen(false)
    router.push(path)
  },[])

  return (
    <nav className='w-full px-10 grid grid-cols-7 z-20 bg-white drop-shadow-lg h-[3rem] relative'>
        <div className='col-span-1 flex items-center cursor-pointer' onClick={()=>handleNavigate('/')}>Logo</div>
        <div className='col-span-2 flex justify-evenly items-center'> 
          <p>category</p>
          <p>category</p>
          <p>category</p>
          <p>category</p>
        </div> 
        <div className='col-span-2 flex items-center w-full '>
          <Search/>
        </div>
        <div className='col-span-2 flex items-center justify-evenly'>
          
          <Cart click={handleNavigate} user={session?.user?.name?.replaceAll(' ','')}/>
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
        { <div className={`absolute  top-10 right-24 rounded-md  bg-white transition-all duration-700  ${isOpen?'max-h-[6rem] opacity-100':'h-0 opacity-0'}  w-[12rem] text-nowrap overflow-hidden `}>
          <p className='hover:bg-primary/60 px-4 py-2 cursor-pointer' onClick={()=>handleNavigate('/orders')}>Manage Orders</p>
          <p className='hover:bg-primary/60 px-4 py-2 cursor-pointer' onClick={()=>signOut()}>Sign Out</p>
        </div>}
    </nav>
  )
}

export default NavComponent