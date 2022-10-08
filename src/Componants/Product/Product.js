import React from 'react'
import coverPhoto from '../../images/coverPhoto.jpg';

export default function Product({product, handleAddToCart}) {

  const {name, price, ratings, id, seller} = product;
  
  return (
    <div className='p-3 border-2 flex flex-col justify-between'>
        <div>
        <div>
            <img src={product.img ? product.img:coverPhoto } alt="" />
        </div>
        <div className=''>{name}</div>
        <h5>Price: ${price}</h5>
        <h6>Manufacturar: {seller}</h6>
        <h6>Rating: {ratings}</h6>
        </div>
        <div className=''>
        <button onClick={()=>{handleAddToCart(id)}} className='bg-orange-400 px-4 py-2 w-full rounded'>Add to Cart</button>
        </div>
    </div>
  )
}
