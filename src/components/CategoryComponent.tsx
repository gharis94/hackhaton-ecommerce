import React from 'react'
import ProductComponent from './ProductComponent'

const CategoryComponent = ({data}:any) => {
  return (
    <div>
        <div className=' grid md:px-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
        {
          data?.length>0 ? (data.map((item:any)=>(
            <ProductComponent key={item._id} item={item}/>
          ))):(
            <p>Sorry No Product Available</p>
          )
        }
      </div>
    </div>
  )
}

export default CategoryComponent