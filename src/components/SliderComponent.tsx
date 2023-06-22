'use client'
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css'
import ProductComponent from './ProductComponent';
import useWidth from '@/hook/useWidth';

type Props={
    data:{
        _id:string;
        quantity:number;
        price:number;
        images:string[];
        title:string
    }[]
}


const SliderComponent:React.FC<Props> = ({data}) => {
    const {width} = useWidth()
    
  return (
    <Swiper
        className='mt-2'
        spaceBetween={10}
        style={{paddingTop:'1rem',paddingBottom:'1rem'}}
        slidesPerView={width<450? 1: width<550?2: width<800? 3:4}          
        >
          {
            data.length>0 && data?.map((item:any)=>(
              <SwiperSlide style={{display:'flex',justifyContent:'center'}} key={item._id}>
                <ProductComponent  item={item}/>
              </SwiperSlide>    
            ))
          }
          
        </Swiper>
  )
}

export default SliderComponent