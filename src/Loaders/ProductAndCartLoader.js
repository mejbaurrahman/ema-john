import { getDb } from "../Componants/Hook/FakeDb/FakeDb";

export const ProductAndCartLoader = async()=> {
    const productLoad = await fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`);
    const products = await productLoad.json();
    
    const getOrders = getDb();
    const initialOrder = [];

    for(let item in getOrders){
        const currentItem = products.find(product=>product.id === item);

        if(currentItem){
            const quantity = getOrders[item];
            currentItem.quantity = quantity;
            initialOrder.push(currentItem);
        }
    }

    return {products, initialOrder};
}
