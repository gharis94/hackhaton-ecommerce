import React from 'react'

type Props={
    color:string;
    text:string;
    count:number
}

const HeadComponent:React.FC<Props> = ({color,count,text}) => {
    
  return (
    <div className={`h-full w-full  ${color} flex flex-col justify-center items-center`}>
        <h2>{text}</h2>
        <p className='text-3xl'>{count}</p>
    </div>
  )
}

export default HeadComponent