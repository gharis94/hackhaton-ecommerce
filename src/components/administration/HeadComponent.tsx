import React from 'react'

type Props={
    color:string;
    text:string;
    count:number
}

const HeadComponent:React.FC<Props> = ({color,count,text}) => {
    
  return (
    <div className={`h-full w-full  ${color} flex flex-col justify-center items-center space-y-2`}>
        <h2 className='text-center px-1'>{text}</h2>
        <p className='text-lg sm:text-3xl'>{count}</p>
    </div>
  )
}

export default HeadComponent