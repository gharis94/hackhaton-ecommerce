import {useEffect,useState} from 'react'

const useWidth = () => {
  const [width,setWidth] = useState(0);

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