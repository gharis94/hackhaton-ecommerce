'use client'
import React,{useCallback, useMemo,useState} from 'react'
import  {usePathname}  from 'next/navigation'
import ProductComponent from '@/components/ProductComponent';
import { client } from '@/lib/client';
import useSWR from 'swr';
import CategoryComponent from '@/components/CategoryComponent';
import Search from '@/components/Search';

interface dataProps{
  
  category?:string;
  bestSeller?:boolean;
  trending?:boolean
}

const getData=async(param:any)=>{
  
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
  }catch(error:any){
    console.log(error.message)
  }
}


const Category = () => {
  const path = usePathname();
  let heading = path?.slice(1);
  const [input,setInput] = useState('');  

  const dataParam:dataProps =useMemo(()=>{ 
    return(heading==='bestSeller'? ({bestSeller:true}): heading==='trending'?({trending:true}):({category:heading}))},[path])
    const {data,error,isLoading} = useSWR(dataParam,getData)
    
  return (
    <div className='max-w-[1250px] mx-auto'>
      <h1 className='text-center text-lg md:text-4xl tracking-[1rem] pt-20 pb-6 uppercase'>{heading}</h1>
      <div className='h-[2px] w-full bg-primary/50 mb-10 px-10'/>
      <div className='mb-10 px-10 max-w-[28rem] mx-auto '>
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search Here...' className='bg-white border-[1px] focus:border-primary items-center w-full outline-none px-2 rounded-full'/>
      </div>
      <div className=' grid md:px-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
        {
          data?.length>0 ? (data.filter((item:any)=>item.title.toLowerCase().includes(input.toLowerCase())).map((item:any)=>(
            <ProductComponent key={item._id} item={item}/>
          ))):(
            <p>Sorry No Product Available</p>
          )
        }
      </div>
      {/* <CategoryComponent data={data}/> */}
    </div>
  )
}

export default Category;