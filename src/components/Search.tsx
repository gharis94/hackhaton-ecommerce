'use client'
import React from 'react'
//import {AiOutlineSearch} from 'react-icons/ai'

const Search = ({input,set}:any) => {
  return (
    
    
    <div className='bg-white py-1 w-full flex border-[1px] peer-focus:border-red-500 items-center px-2 rounded-full'>
      <input className=' grow outline-none pl-2 text-black peer' placeholder='Search Here...'/>
            {/* <button className='text-neutral-500 pr-2'><AiOutlineSearch size={20}/></button> */}
    </div>
    
  )
}

export default Search