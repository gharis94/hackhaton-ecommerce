import Stripe from 'stripe';
import { db,orderTable } from '@/lib/drizzle';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{apiVersion:'2022-11-15'})

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!


export async function POST(req: Request){

    const payload = await req.text()
    
    const sig = req.headers.get('stripe-signature') as string
    //console.log("sig: ", sig)

    let event;

   // const endpointSecret = process.env.WEBHOOK_SECRET_LOCAL as string

    try {
        console.log("constructing event...")
        event = stripe.webhooks.constructEvent(payload, sig, webhookSecret)
    } catch (error) {
        console.error(error)
        return new Response(`Webhook error: ${error}`, {
            status: 400,
        })
    }
    const session:any = event.data.object

    if(event.type==='checkout.session.completed'){
      const data:any = event.data.object   
      
      const p={
        email:data.customer_details.email,
        payment_mode:'card',
        in_transit:false,
        is_deliverd:false,
        items:data.metadata.items,
        amount:data.amount_total
      }

      try{
        const rsp = await db.insert(orderTable).values(p)
        console.log('success')
      }catch(error:any){
        console.log(error.message)
      }

      //console.log(data.metadata)
      //@ts-ignore
      // stripe.customers.retrieve(data.id).then((customer)=>{
      //   console.log(customer)
      //   console.log('data:',data)
      // }).catch((err)=>console.log(err.message))
    }

  return new Response("payment confirmation route received", {
        status: 200,    
  })
}