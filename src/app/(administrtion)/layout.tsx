'use client'
import React from 'react'
import { ServerSideProvider } from '@/context/ServerSideContext'
import { Toaster } from 'react-hot-toast'



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      
  <ServerSideProvider>
  {children}
  <Toaster/>
  </ServerSideProvider>

     
  )
}
