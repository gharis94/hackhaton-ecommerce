'use client'
import React,{useCallback, useEffect, useMemo,useState} from 'react'
import  {useRouter,usePathname}  from 'next/navigation'
import ProductComponent from '@/components/ProductComponent';
import { client } from '@/lib/client';

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
    console.log(query)
    const rsp = await client.fetch(query)
    
    console.log(rsp)
    return rsp
  }catch(error){

  }
}


const Category = async() => {
  const p = usePathname();
  let heading = p?.slice(1);
  const [state,setState] = useState([]);

  console.log(heading)

  const x:dataProps =useMemo(()=>{ 
    console.log('rerender')
    return(heading==='bestSeller'? ({bestSeller:true}): heading==='trending'?({trending:true}):({category:heading}))},[p])
  console.log(x)

  const data = await getData(x)
  // useEffect(()=>{
  //   const a={category:'',bestSeller:false,trending:true}
  //   const dataFetct = async()=>{
  //     const rsp=await getData(x)
  //     setState(rsp)
  //   };
  //   dataFetct()
  // },[])

  
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

export default Category