'use client'
import { ReactNode, createContext,useState } from "react";


export const ServerSideContext = createContext({logIn:false,fn:()=>{}});


export const ServerSideProvider =({children}:{children:ReactNode})=>{
    const [log,setLog] = useState(false)

    const logInFn=()=>{
        setLog(true)
    }
    return(
        <ServerSideContext.Provider value={{logIn:log,fn:logInFn}}>
            {children}
        </ServerSideContext.Provider>
    )
}