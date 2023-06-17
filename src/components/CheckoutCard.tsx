'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import {MdCancel} from 'react-icons/md';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'


type Props={
    id:number
    title:string;
    price:number;
    quantity:number;
    image:string
}

const CheckoutCard = ({item}:{item:Props}) => {    
    const {title,price,quantity,image,id} = item  
    console.log(id)
    const handleDelete =useCallback(async(id:number)=>{
        const query =`/api/cart?product_id=${id}`
        
        try{
            const rsp = await fetch(query,{
                method:'DELETE',
            })
           if(rsp.status===200){
            
           }
        }catch(error:any){
            console.log('client',error.message)
        }
    },[id])
    // const handleChange =useCallback(async({id,operand,value}:{id:number,operand:string,value:number})=>{
    //     let newObject
    //     if(operand=='minus' && value ===1){

    //         return handleDelete(id)
    //     }else if(operand === 'minus' && value>1){
    //         newObject={
    //             id:id,
    //             value:value-1
    //         }
    //     }else if(operand == 'add'){
    //         newObject={
    //             id:id,
    //             value:value+1
    //         }
    //     }
    //     console.log(newObject)
    //     try{
    //         const rsp = await fetch(`/api/cart`,{
    //             method:'PUT',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(newObject)
    //         })
    //        if(rsp.status===200){
            
    //        }
    //     }catch(error:any){
    //         console.log('client',error.message)
    //     }
    // },[id])

  return (
    <div className='grid place-items-center grid-cols-5 pb-2 border-b-[1px]'>
        <div className='col-span-2 grid w-full grid-cols-3  place-items-center'>
            <div className='hidden sm:flex items-center justify-center'>
                <MdCancel onClick={()=>handleDelete(id)} className='text-neutral-300 hover:text-red-500 cursor-pointer' size={28}/>
            </div>
            <div className='relative h-[3rem] w-[3rem] sm:h-[4rem] sm:w-[4rem] col-span-1 rounded-md overflow-hidden'>
                <Image src={image} fill alt=''/>
                <div className='absolute inset-0 hover:bg-primary/60 flex items-center justify-center group'>
                    <MdCancel onClick={()=>handleDelete(id)} className='text-primary/10   group-hover:text-red-500 cursor-pointer' size={28}/>
            </div>
            </div>
            <p className='col-span-2 pl-2 sm:col-span-1 w-full flex  items-center'>{title}</p>
        </div>
        <div className='col-span-1 flex  w-full justify-evenly items-center'>
            {/* <span><BiLeftArrow className='cursor-pointer hover:text-primary' onClick={()=>handleChange({id:id,operand:'minus',value:quantity})} size={18}/></span> */}
            <span>{quantity}</span>
            {/* <span><BiRightArrow className='cursor-pointer hover:text-primary' onClick={()=>handleChange({id:id,operand:'add',value:quantity})} size={18}/></span> */}
            </div>
        <div className='col-span-1'>{price}</div>
        
        <p className='col-span-1'>{quantity*price}</p>
    </div>
  )
}

export default CheckoutCard