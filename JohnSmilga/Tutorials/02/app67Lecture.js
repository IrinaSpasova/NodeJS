const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1> Home page</h> <a href="/api/products">Products</a>');
});

app.get('/api/products',(req,res)=>{
    //if we want ro return every information about the product:
    //res.json(products);
    //if we want part of the data:
    const newProducts = products.map((product)=>{
        const{id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

app.listen(5000,()=>{
    console.log('Server is listening on port 5000!');
});