import React from 'react';
import Image from 'next/image';

type Props={
    title:string;
    price:number;
    quantity:number;
    image:string
}

const CheckoutCard = ({item}:{item:Props}) => {
    
    const {title,price,quantity,image} = item    
  return (
    <div className='grid place-items-center grid-cols-5 pb-2 border-b-[1px]'>
        <div className='col-span-2 grid grid-cols-3 place-items-center gap-4'>
            <div className='relative h-[4rem] w-[4rem] col-span-1 rounded-md overflow-hidden'>
                <Image src={image} fill alt=''/>
            </div>
            <p className='col-span-2'>{title}</p>
        </div>
        <p className='col-span-1'>{quantity}</p>
        <p className='col-span-1'>{price}</p>
        <p className='col-span-1'>{quantity*price}</p>
    </div>
  )
}

export default CheckoutCard