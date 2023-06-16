'use client'
import {useEffect,useState} from 'react'

const useWidth = () => {
  const [width,setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const fn=()=>{
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize',fn);

    return ()=> window.removeEventListener('resize',fn)
  },[])
  
    return ({
        width
    }
  )
}

export default useWidth