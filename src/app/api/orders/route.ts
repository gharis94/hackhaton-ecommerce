import { NextRequest, NextResponse } from "next/server";
import { db,orderTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm"; 


export async function GET(req:NextRequest){
    const user_id = req.nextUrl;
    const param =user_id.searchParams.get('user_id') as string
    try{
        const rsp = await db.select().from(orderTable).where(eq(orderTable.email,param))
        // const updated =await rsp.reduce((acc:any,cur:any)=>{
        //     acc=[...acc,{...cur,items:JSON.parse(cur.items)}]
        //     return acc
        // },[])
        // console.log(updated)
        return NextResponse.json(rsp)
    }catch(err:any){
        console.log(err.message)
    }
}