'use client'
import OrderListComponet from '@/components/OrderListComponet';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import useSWR from 'swr';


type Props={
  tabState:'placed' | 'transit' | 'deliverd'
}

type ListProps={
    id?:number;
    email?:string;
    in_transit:boolean;
    is_deliverd:boolean;
    items:{
     img:string;
     title:string;   
    }[];
    payment_mode:string,
    amount:number
}

//@ts-ignore
const getData =(...args)=>fetch(...args).then(res=>res.json())


const Orders:React.FC = () => {
  const [state,setState] = useState<Props>({tabState:'placed'})
  const {data:session,status} = useSession();
  const router = useRouter()
  if(status==='unauthenticated'){
    router.replace('/')
  }
  const {data,error,isLoading}= useSWR(`/api/orders?user_id=${session?.user?.email}`,getData)
  const [list,setList] = useState<ListProps[]>([])
  useEffect(()=>{
    if(data){
      const updated =data.reduce((acc:any,cur:any)=>{
            acc=[...acc,{...cur,items:JSON.parse(cur.items)}]
            return acc
        },[])
        setList(updated)

    }

  },[data])


  const handleTabClick=useCallback((tab:'placed' | 'transit' | 'deliverd')=>{
    setState({tabState:tab})
  },[])
  return (
    <div className='flex justify-center items-center   h-[90vh]'>
      <div className='h-[80vh] w-[100vw] sm:w-[80vw] overflow-hidden p-4 bg-white  rounded-md drop-shadow-md flex flex-col '>
        <div className='h-1/5  w-full grid grid-cols-3 gap-2'>
          <p onClick={()=>handleTabClick('placed')} className={`col-span-1 border-b-4 my-1  pt-10 w-full ${state.tabState==='placed'?'border-primary':'border-neutral-300 text-neutral-400'} text-center cursor-pointer `}>Order Placed</p>
          <p  onClick={()=>handleTabClick('transit')} className={`col-span-1 border-b-4 my-1  pt-10 w-full ${state.tabState==='transit'?'border-primary':'border-neutral-300 text-neutral-400'} text-center  cursor-pointer`}>Order In Transit</p>
          <p 
            onClick={()=>handleTabClick('deliverd')} 
            className={`col-span-1 border-b-4 my-1   pt-10 w-full ${state.tabState==='deliverd'?'border-primary':'border-neutral-300 text-neutral-400'} text-center  cursor-pointer`}>Order Deliverd</p>
        </div>
        <div className='h-4/5 bg-neutral-200  rounded-md w-full py-4 '>
            <div className='grid grid-cols-5 h-1/6 pb-2 text-neutral-500 sm:text-lg text-xs place-items-center border-b-[2px]   border-neutral-500/50'>
              <p className='col-span-2 wrap'>Order Description</p>
              <p className='col-span-1'> Amount</p>
              <p className='col-span-1'>Payment Status</p>
              <p className='col-span-1'>Status</p>
            </div>
            <div className='overflow-y-scroll h-5/6 scrollbar-thumb-primary scrollbar-thin  scrollbar-track-transparent draggable '>
            {
               list?.length>0 && list.filter(item=>state.tabState==='placed'? (!item.in_transit && !item.is_deliverd):state.tabState==='transit'? (item.in_transit && !item.is_deliverd):state.tabState==='deliverd'? item.is_deliverd: '').map((item)=>(
                <OrderListComponet key={item.id} payment_mode={item.payment_mode} is_delivered={item.is_deliverd} in_transit={item.in_transit} items={item.items} amount={item.amount}/>
              ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Orders