'use client'
import React, { useCallback, useState } from 'react'
type Props={
  tabState:'placed' | 'transit' | 'deliverd'
}

const Orders:React.FC = () => {
  const [state,setState] = useState<Props>({tabState:'placed'})

  const handleTabClick=useCallback((tab:'placed' | 'transit' | 'deliverd')=>{
    setState({tabState:tab})
  },[])
  return (
    <div className='flex justify-center items-center   h-[90vh]'>
      <div className='h-[80vh] w-[80vw] overflow-hidden p-4 bg-white  rounded-md drop-shadow-md flex flex-col '>
        <div className='h-1/5  w-full grid grid-cols-3 gap-2'>
          <p onClick={()=>handleTabClick('placed')} className={`col-span-1 border-b-4 my-1  pt-10 w-full ${state.tabState==='placed'?'border-primary':'border-neutral-300 text-neutral-400'} text-center cursor-pointer `}>Order Placed</p>
          <p  onClick={()=>handleTabClick('transit')} className={`col-span-1 border-b-4 my-1  pt-10 w-full ${state.tabState==='transit'?'border-primary':'border-neutral-300 text-neutral-400'} text-center  cursor-pointer`}>Order In Transit</p>
          <p 
            onClick={()=>handleTabClick('deliverd')} 
            className={`col-span-1 border-b-4 my-1   pt-10 w-full ${state.tabState==='deliverd'?'border-primary':'border-neutral-300 text-neutral-400'} text-center  cursor-pointer`}>Order Deliverd</p>
        </div>
        <div className='h-4/5 bg-purple-400 w-full'>
            lp,h
        </div>
      </div>
    </div>
  )
}

export default Orders