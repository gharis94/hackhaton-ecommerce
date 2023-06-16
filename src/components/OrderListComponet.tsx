'use client'
import React from 'react'
import Image from 'next/image'

type Props={
    id?:number;
    email?:string;
    in_transit:boolean;
    is_delivered:boolean;
    items:{
     img:string;
     title:string;   
    }[];
    payment_mode:string,
    amount:number
}

const OrderListComponet:React.FC<Props> = ({amount,items,in_transit,is_delivered,payment_mode}) => {

    return (
    <div className='grid grid-cols-5 text-neutral-500 sm:text-lg text-xs place-items-center border-b-[1px] pb-4 border-neutral-400/50 '>
              <div className='col-span-2 px-2 gap-2'>
                {
                    items.map(item=>(
                        <div className='flex flex-start  items-center space-y-2 space-x-2'>
                            <div className='relative h-[4rem] mt-2 w-[4rem] overflow-hidden rounded-md'>
                                <Image src={item.img} alt='image' fill/>
                            </div>
                            
                            <p>{item.title}</p>                

                        </div>
                    ))
                }
              </div>
              <p className='col-span-1'>{amount/100}</p>
              <p className='col-span-1 uppercase'>{payment_mode}</p>
              <p className='col-span-1 text-center'>{!in_transit && !is_delivered ? 'Pickup in progress': in_transit && !is_delivered?'In transit':'Deliverd'}</p>
    </div>
  )
}

export default OrderListComponet