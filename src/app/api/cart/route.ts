import { NextRequest,NextResponse } from "next/server";
import {db,cartTable} from '@/lib/drizzle'


export const GET=async(req:NextRequest)=>{
    try{
        const res = await db.select().from(cartTable)
    }catch(error){

    }
}
export const POST=async(req:NextRequest)=>{
    const data = await req.json()
    try{
        const rsp = await db.insert(cartTable).values({
            product_id:data.product_id,
            user_id:data.user_id,
            quantity:data.quantity
        }).returning()
        return NextResponse.json({rsp})
    }catch(error){

    }
}