'use client'
import { ServerSideContext } from '@/app/context/ServerSideContext';
import { useRouter } from 'next/navigation';
import React,{useContext, useState} from 'react'


type Props={
    user:string;
    password:string;
}

const Login = () => {
    const [state,setState] = useState<Props>({user:'',password:''})
    const {fn} = useContext(ServerSideContext)
    const router = useRouter()

    const handleChange=(e:React.ChangeEvent<HTMLElement>)=>{
        const {name,value} = e.target as HTMLInputElement;
            setState((prev:Props)=>({...prev,[name]:value}))
    }

    const handleSubmit =(e:React.FormEvent<HTMLElement>)=>{
        e.preventDefault()
        
        if(state.user==='admin' && state.password==='admin'){
            fn()
            router.push('/server')
        }
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='rounded-md bg-white drop-shadow-md h-[24rem] w-[20rem] border-[1px] grid grid-rows-5 place-items-center pt-4'>
            <div className='row-span-2 flex flex-col justify-evenly'>
                <h2 className=' font-semibold text-2xl'>Admin Sign In</h2>
                <div className='bg-primary mt-2 p-2 rounded-md'>
                    <p><span className='font-semibold'>user:</span>admin </p>
                    <p><span className='font-semibold'>password:</span> admin</p>
                </div>
                
            </div>
            
            <div className='row-span-3 h-full'>
                <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-evenly h-full'>
                    <div className='flex flex-col'>
                        <label htmlFor="user">User:</label>
                        <input id='user' type='text' name='user' value={state.user} placeholder='Enter Uer..' onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="pass">User:</label>
                        <input id='pass' type='password' name='password' value={state.password} placeholder='Enter Password..' onChange={(e)=>handleChange(e)} />
                    </div>
                    <button className='bg-primary hover:bg-primary/50 rounded-md'>Sign In</button>
                </form>
            </div>
        </div>    
    </div>
  )
}

export default Login