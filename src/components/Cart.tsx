'use client'
import React,{ useCallback, useEffect, useState,useContext} from 'react'
import {AiOutlineShopping} from 'react-icons/ai';
 import useSWR from 'swr'
 import toast from 'react-hot-toast'
import { CartContext } from '@/context/CartContext';

//@ts-ignore
const getCount = (...args) => fetch(...args).then(res => res.json())


const Cart =({click,user}:{click:any,user:string|null|undefined}) => {
//  const {data,error,isLoading} = useSWR(`/api/cart?user_id=${user}`,getCount) 
  //const [quantity,setQuantity] = useState(0);
  const {quantity} = useContext(CartContext)

  // console.log(quantity)
  // useEffect(()=>{
  //   if(Array.isArray(data) ){
  //     console.log(data.length)
  //     setQuantity(data.length)
  //   }
  // },[data])

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
      <span className='absolute top-0 right-0 px-1 py-1 bg-primary rounded-full text-[0.4rem]'>{quantity}</span>
    </div>
  )
}

export default Cart