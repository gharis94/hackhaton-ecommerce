'use client'
import React from 'react'
import { ServerSideProvider } from '@/context/ServerSideContext'




export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <div>
       <ServerSideProvider>
        {children}
       </ServerSideProvider>
      </div>
 
  )
}
