// Partial of ./pages/api/webhooks/index.ts
import Stripe from 'stripe';
import { NextApiRequest,NextApiResponse } from 'next';

// const cors = Cors({
//   allowMethods: ['POST', 'HEAD'],
// });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{apiVersion:'2022-11-15'})
// Partial of ./pages/api/webhooks/index.ts
// ...
const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!

// Stripe requires the raw body to construct the event.
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }


export async function POST(req: Request){

    const payload = await req.text()
    
    const sig = req.headers.get('stripe-signature') as string
    console.log("sig: ", sig)

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
    const session = event.data.object
    console.log(session)
    return new Response("payment confirmation route received", {
        status: 200,
    })
}

//acct_1NITlrH0luRk3ULE