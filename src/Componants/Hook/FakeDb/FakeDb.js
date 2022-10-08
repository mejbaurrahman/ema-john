const addToDb =(id)=>{
    const db = getDb();
    if(id in db){
        db[id] = db[id]+1;
    }else{
        db[id]=1;
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

const deleteDb =()=>{
    localStorage.removeItem('shopping-cart');
}
const getDb =()=>{
    const savedDb = localStorage.getItem('shopping-cart');
    if(savedDb){
        return JSON.parse(savedDb);
    }else{
        return {};
    }
}

export {addToDb, removeFromDb, getDb, deleteDb};