import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getDb } from '../Hook/FakeDb/FakeDb';
import Product from '../Product/Product';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, [])

    useEffect(()=>{
        const db = getDb();
        const shoppingCart = [];
        for(let item in db){
            const currentItem = products.find(product=> product.id === item);
            const q = db[item];
            // const quantity = JSON.stringify(currentItem);
            // console.log(quantity.name)
            // console.log(item)
            // // shoppingCart.push(currentItem);
            // // console.log(currentItem.name)
            // console.log(quantity);
        }
    }, [products])

    const handleAddToCart = (id)=>{
        const clickedItem = products.find(product=>product.id === id);
        const newOrder = [...order, clickedItem];
        // console.log(clickedItem);
        addToDb(clickedItem);
        setOrder(newOrder);
    }
  return (
    <div className='container md:flex mt-9'>
            <div className='md:w-3/4 md:grid grid-cols-3 py-24 px-10 gap-2'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='md:w-1/4 bg-orange-200'>
                <Cart order={order}></Cart>
            </div>
    </div>
  )
}
