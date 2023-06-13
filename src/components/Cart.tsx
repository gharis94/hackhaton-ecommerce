'use client'
import React,{ useCallback, useState} from 'react'
import {AiOutlineShopping} from 'react-icons/ai';
import useSWR from 'swr'
import toast from 'react-hot-toast'

//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())


const Cart =({click,user}:{click:any,user:string|undefined}) => {
  const [quantity,setQuantity] = useState(0); 
  const {data,error,isLoading} = useSWR(`/api/cart?user_id=${user}`,fetcher) 

  const handleClick=useCallback(()=>{
    if(user === undefined){
      toast.error('Please Log In')
    }else{
      click(`/checkout?usser_id=${user}`)
    }
  },[user,click])

 
  return (
    <div className='relative cursor-pointer' onClick={()=>handleClick()}>
      <AiOutlineShopping size={28}/>
      <span className='absolute top-0 right-0 px-1 py-1 bg-primary rounded-full text-[0.4rem]'>{quantity }</span>
    </div>
  )
}

export default Cart