'use client'
import React,{createContext, useMemo,useCallback} from 'react';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import {toast} from 'react-hot-toast'

type Props={
  _id?:string;
  quantity?:number|undefined;
  price?:number;
  images?:any;
  title?:string

}

type stateProps={
  quantity:number|undefined;
  handleToCart?:any
  data?:any
  status?:any
  session?:any
  isLoading?:any
}

const state={
  quantity:0,
}

const initialState={
    _id:'',
    quantity:0,
    price:0,
    image:'',
    title:''
}
export const CartContext = createContext<stateProps>(state);

//@ts-ignore
const getCount = (...args) => fetch(...args).then(res => res.json())

export const CartProvider = ({children}:{children:any})=>{
    const {data:session,status} = useSession()
      const {data,error,mutate,isLoading} = useSWR(`/api/cart?user_id=${session?.user?.email}`,getCount)


      const quantity=useMemo(()=>{
        
        if(Array.isArray(data)){
        
            return data.length
        }
      },[data,isLoading])


      const handleToCart=useCallback(async(item:Props)=>{
          console.log('add')
        if(status==='unauthenticated' || status==='loading'){
        
        toast.error('Please log in first')        
      }
      // console.log(session)
      // console.log(item)
    try{
        if(session?.user){

          const toSend ={
              user_id:session.user.email,
              product_id:item._id,
              quantity:1,
              title:item.title,
              image:item.images[0],
              price:item.price
            }
          const rsp = await fetch('/api/cart',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(toSend)
          })
          if(rsp.ok){
            toast.success('Added to cart')
            mutate()
          }
      }
    }catch(error:any){
      console.log(error.message)
    }
    
  },[data])
    return(
        <CartContext.Provider value={{quantity,handleToCart,data,status,session,isLoading}}>
            {children}
        </CartContext.Provider>
    )
}