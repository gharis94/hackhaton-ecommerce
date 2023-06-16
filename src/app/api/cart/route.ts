import { NextRequest,NextResponse } from "next/server";
import {db,cartTable} from '@/lib/drizzle'
import {eq} from 'drizzle-orm'


export const GET=async(req:NextRequest)=>{
    const user_id = req.nextUrl    
    const uid=user_id.searchParams.get('user_id') as string;
    
    try{
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id,uid))
        return NextResponse.json(res)
    }catch(error:any){
        console.log(error.message)
    }
}
export const POST=async(req:NextRequest)=>{
    const data = await req.json()
    
    try{
        const rsp = await db.insert(cartTable).values(data).returning()
        return NextResponse.json({rsp})
    }catch(error:any){
        console.log(error.message)
    }
}

export const DELETE = async(req:NextRequest)=>{
    
    const data = req.nextUrl;
    const product_id = data.searchParams.get('product_id') as string
    const t = parseInt(product_id)
    try{
        const rsp= await db.delete(cartTable).where(eq(cartTable.id,t))
        return NextResponse.json(rsp)
    }catch(error:any){
        console.log('server',error.message)
    }
    return NextResponse   
}