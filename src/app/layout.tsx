import NavComponent from '@/components/NavComponent'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'
import {Session, getServerSession} from 'next-auth';
import { headers } from 'next/headers';
import { authOption } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoSync',
  description: 'Generated by create next app',
}

// async function getSession(cookie:string):Promise<Session> {
//   const rsp =await fetch (`${process.env.NEXTAUTH_URL}/api/auth/session`,{
//     headers:{
//       cookie,
//     }
//   })
//   const session = await rsp.json();
//   return Object.keys(session).length>0? session:null
// }

export default async function RootLayout({children}:{children:React.ReactNode}) {
  //const session = await getSession(headers().get('cookie')??'')
  //const session = await getServerSession(authOption)
  
  return (
    <html lang="en">
      <head/>
      <body className={inter.className} >
        <Provider>
          <NavComponent/>
          {children}  
        </Provider>    
      </body>
    </html>
  )
}
