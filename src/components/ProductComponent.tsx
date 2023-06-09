'use client'
import React, { useCallback } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'; 
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';




const ProductComponent = ({item}:{item:any}) => {
  const {data,status} = useSession();
//  console.log(data)
  
  const handleToCart=useCallback(async()=>{
    
      if(status==='unauthenticated'){
        console.log('a')
        toast.error('Please log in first')        
      }
    try{
        if(data?.user){
          console.log('b')
          const rsp = await fetch('/api/cart',{
            method:'POST',
            body:JSON.stringify({
              user_id:data.user.email,
              product_id:item._id,
              quantity:1
            })
          })
          const result = await rsp.json()
          console.log(result)
          if(rsp.ok){
            toast.success('Added to cart')
          }
      }
    }catch(error:any){
      console.log(error.message)
    }
    
  },[item])
  return (
    <div className='h-[16rem] bg-white bg-opacity-30  backdrop-blur-lg drop-shadow-md w-[13rem] rounded-md overflow-hidden'>
        <div className='bg-black h-2/3 relative'>
          <Image src={item?.images[0]} alt='' fill/>
        </div>
        <div className='px-2 flex h-1/3 py-2 flex-col justify-between'>
            <div className='flex justify-between'>
                <h2>{item?.title}</h2>
                <p><span className='text-xs text-primary font-semibold pr-1'>PKR</span>{item?.price}</p>
            </div>
            <button onClick={()=>handleToCart()} className='bg-primary hover:bg-primary/70 focus:bg-primary/70 w-full flex items-center justify-center space-x-2 rounded-md'>
                <span>Add To Cart</span>
                <AiOutlineShoppingCart/>
            </button>
        </div>
        
    </div>
  )
}

export default ProductComponent