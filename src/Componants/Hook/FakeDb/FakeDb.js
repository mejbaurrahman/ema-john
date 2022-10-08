const addToDb =(item)=>{
    const db = getDb();
    if(item.id in db){
        db[item.id] = db[item.id]+1;
    }else{
        db[item.id]=1;
    }
    saveToDb(db);
}

const saveToDb=(db)=>{
    localStorage.setItem('shopping-cart', JSON.stringify(db));
}

const removeFromDb =(item)=>{
    const db = getDb();
    delete db[item];
    saveToDb(db);

}
const getDb =()=>{
    const savedDb = localStorage.getItem('shopping-cart');
    if(savedDb){
        return JSON.parse(savedDb);
    }else{
        return {};
    }
}

export {addToDb, removeFromDb, getDb};