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
        const savedOrder = [];
        for(let item in db){
            const currentItem = products.find(product=> product.id === item);
            if(currentItem){
                const quantity = db[item];
                currentItem.quantity= quantity;
                savedOrder.push(currentItem);
            } 
        }
        setOrder(savedOrder)
    }, [products])

    const handleAddToCart = (product)=>{
        // const clickedItem = products.find(product=>product.id === id);
        let savedOrder = [];
        const exist = order.find(item => item.id === product.id);
        if(!exist){
            product.quantity =1;
            savedOrder = [...order, product];

        }else{
            const rest = order.filter(p => p.id !== product.id);
            exist.quantity = exist.quantity+1;
            savedOrder= [...rest, exist];
        }
      
        // console.log(clickedItem);
        setOrder(savedOrder);
        addToDb(product.id);
        
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
