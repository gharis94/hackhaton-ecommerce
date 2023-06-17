import { NextRequest, NextResponse } from "next/server";
import { db,orderTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm"; 


export async function GET(req:NextRequest){
    const user_id = req.nextUrl;
    const param =user_id.searchParams.get('user_id') as string
    if(param !== 'admin_1232'){
        try{
            const rsp = await db.select().from(orderTable).where(eq(orderTable.email,param))
            return NextResponse.json(rsp)
        }catch(err:any){
            console.log(err.message)
        }
    }else{
        try{
            const rsp = await db.select().from(orderTable)
            return NextResponse.json(rsp)
        }catch(error:any){
            console.log(error.message)
        }
    }
}

export  const PUT =async(req:NextRequest)=>{
    
    try{
        const data= await req.json()
        const res= await db.update(orderTable).set({[data.key]:data.value}).where(eq(orderTable.id,data.id))

        return NextResponse.json(res)
    }catch(err:any){
        console.log(err.message)
    }

}