import React  from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import ProductComponent from './ProductComponent';
import { client } from '@/lib/client';
import Link from 'next/link';
import SliderComponent from './SliderComponent';




const getData =async(type:{bestSeller:boolean,trending:boolean})=>{
  try{
    const rsp = await client.fetch(`*[_type=='products' && bestSeller==${type.bestSeller} && trending==${type.trending}]{
      title,
      trending,
      bestSeller,
      images,
      price,
      slug,
      _id
    } `)
    return rsp
  }catch(error){
    console.log(error)
  }
}

const HomeProductListComponent=async ({title,type}:{title:string,type:string})=>  {
  const data = await getData(title ==='Best Seller'?({bestSeller:true,trending:false}):({bestSeller:false,trending:true}))
 
  return (
    <div>
        <div className='flex justify-between border-b-2 pb-2 border-neutral-300 '>
            <h2 className='text-lg md:text-3xl font-semibold'>{title}</h2>
            <Link href={title==='Best Seller'?'/bestSeller':'/trending'} className='flex items-center space-x-2 text-primary'> <span>View All</span> <BsFillArrowRightCircleFill/> </Link>
        </div>
        <SliderComponent data={data}/>        
        
    </div>
  )
}

export default HomeProductListComponent;