import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import HomeProductComponent from './HomeProductComponent';

type Props={
  title:string;
}
 
const HomeProductListComponent:React.FC<Props> = ({title}) => {
  const arr=[1,2,3,4,5,6,7]
  return (
    <div>
        <div className='flex justify-between border-b-2 pb-2 border-neutral-300 '>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='flex items-center space-x-2 text-primary'> <span>View All</span> <BsFillArrowRightCircleFill/> </p>
        </div>
        <div className='flex w-full py-4 scrollbar-thumb-primary/30 scrollbar-thin scrollbar-track-transparent draggable overflow-x-auto overflow-y-hidden gap-4 '>
          
          {
            arr.map(item=>(
              <div className=''>
                <HomeProductComponent/>
              </div>
            ))
          }
        </div>
        
    </div>
  )
}

export default HomeProductListComponent;