'use client'
import React, { ReactNode } from 'react'
import {SessionProvider} from 'next-auth/react';
import {Session} from 'next-auth';

type Props={
    children:ReactNode,
    session:Session
}

const Provider:React.FC<Props> = ({children}) => {
  return (
    <SessionProvider >{children}</SessionProvider>
  )
}

export default Provider