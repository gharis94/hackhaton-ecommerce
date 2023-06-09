import { NextRequest, NextResponse } from "next/server";
import { ItemChild } from "sanity/desk";
import Stripe from "stripe";
//@ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const POST= async (req:NextRequest)=>{
    const {items,email} =await req.json();
        
    const transformedItems=items.map((item:any)=>({
        price_data:{
            currency:'gbp',
            unit_amount:item.price*1000,
            product_data:{
                name:item.title,
                images:[item.image]
            }
        },
        quantity:item.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        shipping_address_collection:{
            allowed_countries:['GB',"US","CA"],
        },
        line_items:transformedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/failed`,
        metadata:{
            email,
            images: JSON.stringify(items.map((item:any)=>item.image)),
            items:JSON.stringify(items.map((item:any)=>({title:item.title,img:item.image})))
        }
    })

    return NextResponse.json(session)
}