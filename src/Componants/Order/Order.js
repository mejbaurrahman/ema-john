import React from 'react'
export default function Order({order}) {
console.log(order);
  const {name, price, ratings, id, seller, quantity, img} = order;
  
  return (
    <div className='p-3 border-2 flex md:flex-row flex-col justify-between items-center mt-2'>
        <div className='flex md:flex-row flex-col justify-start items-center'>
        <div>
            <img src={img} alt="" style={{width: '150px'}} />
        </div>
       <div className='ml-2'>
       <div className=''>{name}</div>
        <h5>Price: ${price}</h5>
        <h6>Manufacturar: {seller}</h6>
        <h6>Quantity: {quantity}</h6>
        <h6>Rating: {ratings}</h6>
       </div>
        </div>
        <div className=''>
            <button>Delete</button>
        </div>
    </div>
  )
}
