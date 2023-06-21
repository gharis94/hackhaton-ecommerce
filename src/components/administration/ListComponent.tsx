'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

type Props={
    items:string;
    in_transit:boolean;
    is_deliverd:boolean;
    id:number;
    mutate:any
}


const ListComponent:React.FC<Props> = ({id,items,in_transit,is_deliverd,mutate}) => {
    const [state,setState] = useState<any>([])  
    const router = useRouter()
    
    useEffect(()=>{
       const item = JSON.parse(items)
        setState(item)
    },[items])
    
    const handleCheck = useCallback(async(e:React.ChangeEvent<HTMLInputElement>)=>{
        const data ={
            id:id,
            key:(e.target as HTMLInputElement).name,
            value:(e.target as HTMLInputElement).value ==='true' ? true:false
        }

        try{
            const rsp = await fetch('api/orders',{
             method:'PUT',
             headers:{
                'Content-Type':'application/json'
             },
             body: JSON.stringify(data) 
            })

            if(rsp.ok){
                //router.refresh()
                toast.success('Success')
                mutate()
            }
        }catch(err:any){
            console.log(err.message)
        }
    },[id])

  return (
    <div className='grid grid-cols-5 border-b-[1px] pb-1 px-2 border-neutral-300'>
        <div className='col-span-2 ' >
            {state.length>0 && state.map((x:any)=>(
                <div key={x.img} className='flex  items-center space-x-2'>
                    <div className='relative h-[3rem] w-[3rem] sm:h-[4rem] sm:w-[4rem] col-span-1 rounded-md overflow-hidden'>
                        <Image src={x.img} fill alt=''/>
                    </div>
                    <p>{x.title}</p>
                </div>
                ))            
            }
        </div>
            <div className='flex justify-center items-center'>
                <input
                name='in_transit'
                value='true'
                disabled={in_transit}
                className='col-span-1 cursor-pointer'
                type='checkbox'
                onChange={(e)=>handleCheck(e)}
                />
            </div>
            
            <div className='flex justify-center items-center'>
                <input
                name='is_deliverd'
                value='true'
                disabled={!in_transit || is_deliverd}
                className='col-span-1 cursor-pointer'
                type='checkbox'
                onChange={(e)=>handleCheck(e)}
                />
            </div>
            <div className='flex justify-center items-center'>
                <p>{!in_transit && !is_deliverd? 'pickup in progress..':in_transit && !is_deliverd?'in transit..':'Deliverd'}</p>
            </div>
    </div>
    
  )
}

export default ListComponent