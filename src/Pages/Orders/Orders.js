import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Order from '../../Componants/Order/Order';
import ReviewCart from '../../Componants/ReviewCart/ReviewCart';

export default function Orders() {

  const {products, initialOrder} = useLoaderData();
  console.log(initialOrder);
  const [order, setOrder] = useState(initialOrder);
  return (
    <div className='container md:flex mt-9 p-10'>
            <div className='md:w-3/4 md:grid grid-cols-1 py-24 px-10 gap-2'>
                {
                    initialOrder.map(order=><Order
                    key={order.id}
                    order={order}
                    ></Order>)
                }
            </div>
            <div className='md:w-1/4 bg-orange-200 rounded'>
                <ReviewCart order= {order}></ReviewCart>
            </div>
    </div>
  )
}
