'use client'
import React, { useCallback,useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'; 
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/CartContext';

type Props={
  _id:string;
  quantity:number;
  price:number;
  images:string[];
  title:string
}


const ProductComponent = ({item}:{item:Props}) => {
  const {data,status} = useSession();
  const router = useRouter();
  const {handleToCart} = useContext<any>(CartContext);

  // const handleToCart=useCallback(async()=>{
  //     if(status==='unauthenticated' || status==='loading'){
        
  //       toast.error('Please log in first')        
  //     }
  //   try{
  //       if(data?.user){

  //         const toSend ={
  //             user_id:data.user.email,
  //             product_id:item._id,
  //             quantity:1,
  //             title:item.title,
  //             image:item.images[0],
  //             price:item.price
  //           }
  //         const rsp = await fetch('/api/cart',{
  //           method:'POST',
  //           headers:{
  //             'Content-Type':'application/json'
  //           },
  //           body:JSON.stringify(toSend)
  //         })
  //         if(rsp.ok){
  //           toast.success('Added to cart')
  //           router.refresh()
  //         }
  //     }
  //   }catch(error:any){
  //     console.log(error.message)
  //   }
    
  // },[data])

  return (
    <div className='h-[18rem] sm:h-[16rem] bg-white bg-opacity-100  drop-shadow-md w-[16rem] pb-2 border-[1px] border-neutral-200 sm:w-[14rem] rounded-md overflow-hidden'>
        <div className='bg-black h-2/3 relative'>
          <Image className='object-cover' src={item?.images[0]} alt='' fill/>
        </div>
        <div className='px-2 flex h-1/3 py-2 flex-col justify-between'>
            <div className='flex flex-col justify-between '>
                <h2 >{item?.title}</h2>
                <p><span className='text-xs text-primary font-semibold pr-1'>PKR</span>{item?.price}</p>
            </div>
            <button onClick={()=>handleToCart(item)} className='bg-primary hover:bg-primary/70 focus:bg-primary/70 w-full flex items-center justify-center mt-2 space-x-2 rounded-md'>
                <span className='text-xs md:text-sm'>Add To Cart</span>
                <AiOutlineShoppingCart className='hidden  md:block'/>
            </button>
        </div>
        
    </div>
  )
}

export default ProductComponent