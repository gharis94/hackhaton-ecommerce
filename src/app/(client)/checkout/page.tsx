'use client'
import React, { useContext } from 'react'
//import { useSession } from 'next-auth/react'
import CheckoutCard from '@/components/CheckoutCard'
import getStripe from '@/lib/stripe'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { CartContext } from '@/context/CartContext'

type Props={
  product_id:string;
  user_id?:string;
  quantity:number;
  price:number;
  image:string;
  title:string
}
//@ts-ignore
const fetcher = (...args) =>fetch(...args).then(res => res.json())

const Checkout = () => {
  //const {data:session,status} = useSession()
  const {data,status,session,isLoading} = useContext(CartContext)
  const router = useRouter();
  
  if(status==='unauthenticated'){
    router.replace('/')
  }
  //const {data,error,isLoading} = useSWR(`/api/cart?user_id=${session?.user?.email}`,fetcher)
  

const handleSubmit = async () => {
  // const newData = data.filter(item=>({title:item.title,price:item.price,image:item.image}))
  // Create a Checkout Session.
  const checkoutSession:any= await fetch(
    '/api/create-checkout-session',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
    body:JSON.stringify(
    { items:data,email:session?.user?.email })},
  );

  if ((checkoutSession as any).statusCode === 500) {
    console.error((checkoutSession as any).message);
    return;
  }
  const rsp = await checkoutSession.json()
  // Redirect to Checkout.
  const stripe = await getStripe();
  const { error } = await stripe!.redirectToCheckout({
    // Make the id field from the Checkout Session creation API response
    // available to this file, so you can provide it as parameter here
    // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    sessionId: rsp?.id,
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
  console.warn(error.message);
};

  return (
    <div className='sm:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-6 min-h-[50vh] gap-2 pt-10 '>
          <div className='sm:col-span-4 bg-white drop-shadow-md  h-full'> 
            <div className='grid place-items-center grid-cols-5 pb-2 border-b-2 border-b-primary/50 texl-lg md:text-xl font-semibold'>
              <p className='col-span-2'>Description</p>
              <p className='col-span-1'>Qty</p>
              <p className='col-span-1'>Price</p>
              <p className='col-span-1'>Sub-Total</p>
            </div>
            <div className='pt-4 px-4 space-y-4'>
              {
                !isLoading && data?.map((item:any)=>(
                  <CheckoutCard key={item.id} item={item}/>
                ))

              }

            </div>
          </div>
          <div className='md:col-span-2 max-h-[10rem] flex flex-col justify-between pb-10 px-8 bg-white rounded-md drop-shadow-md'> 
            <h1 className='text-center text-2xl pt-6'>Checkout</h1>
            {!isLoading &&
              <button role='link' 
                onClick={()=>handleSubmit()} className='w-full  rounded-md bg-primary'>
                Check Out
              </button>
            }
          </div>
        </div>
    </div>
  )
}

export default Checkout