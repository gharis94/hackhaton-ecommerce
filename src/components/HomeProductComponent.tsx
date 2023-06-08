'use client'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'; 

const HomeProductComponent = () => {
  return (
    <div className='h-[16rem] bg-white bg-opacity-30  backdrop-blur-lg drop-shadow-md min-w-[13rem] rounded-md overflow-hidden'>
        <div className='bg-black h-2/3'>a</div>
        <div className='px-2 flex h-1/3 py-2 flex-col justify-between'>
            <div className='flex justify-between'>
                <h2>Title</h2>
                <p>344</p>
            </div>
            <button className='bg-primary hover:bg-primary/70 focus:bg-primary/70 w-full flex items-center justify-center space-x-2 rounded-md'>
                <span>Add To Cart</span>
                <AiOutlineShoppingCart/>
            </button>
        </div>
        
    </div>
  )
}

export default HomeProductComponent