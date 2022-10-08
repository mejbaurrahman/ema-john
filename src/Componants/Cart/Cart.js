import React from 'react'

export default function Cart({order}) {

    // let total =0;
    // console.log(order);
    const quantity = order.reduce((p, q)=> p+ q.quantity, 0);
    const total= order.reduce((previous, currentItem)=> previous+currentItem.price*currentItem.quantity, 0);
    const shipping= order.reduce((previous, currentItem)=> previous+currentItem.shipping, 0);

    const tax= parseFloat((total*0.1).toFixed(2));

    const grandTotal = (total+ shipping+tax);
    
  return (
    <div className='p-3 divide-y-2 divide-solid'>
        <h5 className='text-center text-3xl font-semibold mb-4'>Order Summery</h5>
        <div className=''>
            <h1>Selected Item: {quantity}</h1>
            <h1>Total Price: ${total}</h1>
            <h1>Shipping Charge: ${shipping}</h1>
            <h1>Tax: ${tax}</h1>
            <h1>Grand Total: ${grandTotal}</h1>

        </div>
        <div className='mt-3'>
            <button className='px-4 py-2 w-full bg-orange-600 rounded mb-3 mt-3'>Clear Cart</button>
            <button className='px-4 py-2 w-full bg-orange-400 rounded'>Order Review</button>
        </div>
    </div>
  )
}
