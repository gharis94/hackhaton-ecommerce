'use client'
import { ReactNode, createContext,useState } from "react";


export const ServerSideContext = createContext({logIn:false,logInFn:()=>{}});


export const ServerSideProvider =({children}:{children:ReactNode})=>{
    const [log,setLog] = useState(false)

    const logInFn=()=>{
        setLog(true)
    }
    return(
        <ServerSideContext.Provider value={{logIn:log,logInFn:logInFn}}>
            {children}
        </ServerSideContext.Provider>
    )
}