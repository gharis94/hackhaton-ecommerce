'use client'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
//import Image from 'next/image'

import 'swiper/css'
//import "swiper/css/effect-fade";
//import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
import BannerImage from './BannerImage'

const Banner = () => {
  return (
    <div className='w-full sm:mt-2  sm:rounded-md overflow-hidden'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{clickable:true}}
        autoplay={{delay:5000,disableOnInteraction:true}}
        modules={[Pagination,Autoplay]}
      >
        <SwiperSlide>
          <BannerImage link='/Shoes' primaryText={`Let's Make a Difference`} secondaryText='Smart Shoes For Smart People' onRight={false} isDarkFont={false} img='https://images.unsplash.com/photo-1634581448750-22a591d78099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage link='/Women' primaryText='Special Week for Women' secondaryText='Get the New Arrival' onRight={true} isDarkFont={true} img='https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=898&q=80'/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage link='/Men' primaryText={`Let's Make This Summer Special`} secondaryText='Get the New Arrival' onRight={false} isDarkFont={false} img='https://images.unsplash.com/photo-1596603324167-4cbb7a0de677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage link='/Women' primaryText={`Let's Make This Summer Special`} secondaryText='Get the New Arrival' onRight={false} isDarkFont={false} img='https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80'/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage link='/Accessories' primaryText={` Summer Accessories '23`} secondaryText='Get the New Arrival' onRight={false} isDarkFont={true} img='https://images.unsplash.com/photo-1617048931430-5eb626d81e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'/>
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        

        /* Custom active pagination bullet color */
        .swiper-pagination-bullet-active {
          background-color: #FFC21F; /* Replace with your desired color */
        }
      `}</style>
    </div>
  )
}

export default Banner