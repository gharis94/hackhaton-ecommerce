'use client'
import React,{useMemo} from 'react'
import  {usePathname}  from 'next/navigation'
import ProductComponent from '@/components/ProductComponent';
import { client } from '@/lib/client';
import useSWR from 'swr';

interface dataProps{
  
  category?:string;
  bestSeller?:boolean;
  trending?:boolean
}

const getData=async(param:any)=>{
  console.log(param)
  try{
    const categoryCondition = param.category ? `&& category->category=='${param.category}'` : '';
    const bestSellerCondition = param.bestSeller ? `&& bestSeller == ${param.bestSeller}` : '';
    const trendingCondition = param.trending ? `&& trending == ${param.trending}` : '';
    const query=`*[_type=='products' ${categoryCondition}  ${trendingCondition} ${bestSellerCondition}]{
      title,
      _id,
      trending,
      bestSeller,
      images,
      price,
      slug,
      category->{category}
    } `
    //console.log(query)
    const rsp = await client.fetch(query)
    
    //console.log(rsp)
    return rsp
  }catch(error){

  }
}


const Category = () => {
  const path = usePathname();
  let heading = path?.slice(1);
  

  const dataParam:dataProps =useMemo(()=>{ 
    console.log('rerender')
    return(heading==='bestSeller'? ({bestSeller:true}): heading==='trending'?({trending:true}):({category:heading}))},[path])
  

  //const data = await getData(x)
  const {data,error,isLoading} = useSWR(dataParam,getData)

  
  return (
    <div className='max-w-[1250px] mx-auto'>
      <h1 className='text-center text-4xl tracking-[1rem] pt-20 pb-10 uppercase'>{heading}</h1>
      <div className='h-[2px] w-full bg-primary/50 mb-20 px-10'/>
      <div className=' grid md:px-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
        {
          data?.length>0 ? (data.map((item:any)=>(
            <ProductComponent key={item._id} item={item}/>
          ))):(
            <p>Sorry No Product Available</p>
          )
        }
      </div>
    </div>
  )
}

export default Category;