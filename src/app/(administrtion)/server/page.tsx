'use client'
import React, { useContext, useMemo } from 'react'
import useSWR from 'swr';
import HeadComponent from '@/components/administration/HeadComponent';
import ListComponent from '@/components/administration/ListComponent';
import { useRouter } from 'next/navigation';
import { ServerSideContext } from '@/app/context/ServerSideContext';


type Props={
    placed:number;
    in_transit:number;
    is_deliverd:number;
}

//@ts-ignore
const fetcher =(...args)=>fetch(...args).then(res=>res.json());

const page = () => {
    const router = useRouter();
    const {logIn} = useContext(ServerSideContext);
    
    if(!logIn){
        router.replace('/login')
    }
    const {data,error,isLoading} = useSWR('/api/orders?user_id=admin_1232',fetcher)
    // const [state,setState] = useState<Props>({placed:0,in_transit:0,is_deliverd:0})
    // console.log(data)


    const placed = useMemo(()=>{
        console.log('placed')
        if(Array.isArray(data)){
            return data.reduce((acc:any,cur:any)=>{
                if(!cur.in_transit && !cur.is_deliverd){
                    acc =+1
                }
                return acc
            },0)
        }
    },[data])
    const transit = useMemo(()=>{
        
        if(Array.isArray(data)){
            return data.reduce((acc:any,cur:any)=>{
                if(cur.in_transit && !cur.is_deliverd ){
                    acc =+1
                }
                return acc
            },0)
        }
    },[data])
     const deliverd = useMemo(()=>{
        
        if(Array.isArray(data)){
            return data.reduce((acc:any,cur:any)=>{
                if(cur.is_deliverd){
                    acc =+1
                }
                return acc
            },0)
        }
    },[data])

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='h-[80vh] w-[80vw] bg-white overflow-hidden rounded-md border-neutral-400 border-1 drop-shadow-md '>
            <div className='h-1/5 grid grid-cols-3 drop-shadow-md'>
                <HeadComponent text='Total Order Placed' count={placed} color='bg-primary' />
                <HeadComponent text='Total Order In Transit' count={transit} color='bg-primary/70' />
                <HeadComponent text='Total Order Deliverd' count={deliverd} color='bg-primary/50' />
            </div>
            <div className='h-4/5'>
                <div className='grid grid-cols-4 place-items-center pt-4 pb-2 border-b-[1px] border-neutral-400 ml-4 mr-4'>
                    <p className='col-span-2'>Description</p>
                    <p className='col-span-1'>Transit</p>
                    <p className='col-span-1'>Deliverd</p>
                </div>
                <div className='overflow-y-scroll scrollbar-thin'>
                    {
                        !isLoading && !error && data.map((item:any)=>(
                            <ListComponent key={item.id} items={item.items} in_transit={item.in_transit} is_deliverd={item.is_deliverd} id={item.id}/>
                        ))     
                    }
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default page