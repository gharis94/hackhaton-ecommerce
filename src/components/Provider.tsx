'use client'
import React, { ReactNode } from 'react'
import {SessionProvider} from 'next-auth/react';
//import {Session} from 'next-auth';

type Props={
    children:ReactNode,
}

const Provider:React.FC<Props> = ({children}) => {
  return (
    <SessionProvider refetchOnWindowFocus={false} >{children}</SessionProvider>
  )
}

export default Provider