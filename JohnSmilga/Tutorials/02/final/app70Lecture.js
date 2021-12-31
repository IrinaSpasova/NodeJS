const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1> Home page</h> <a href="/api/products">Products</a>');
});

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const{id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

app.get('/api/products/:productID',(req,res)=>{

    //test ( http://localhost:5000/api/products/1 ):
   //console.log(req);
   //console.log(req.params); !string!
//    const singleProduct = products.find((product)=>product.id ===1);
//    res.json(singleProduct);
   const {productID}= req.params; ///STRING
    const singleProduct = products.find((product)=>product.id ===Number(productID));
    if(!singleProduct){
        return res.status(404).send('Product does not exist');
    }
    
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params);
    res.send("Hello!")
});

//query?search=a&limit=2
app.get('/api/v1/query',(req, res) =>{
   // console.log(req.query);
   const{search,limit} = req.query;
    let sortedProducts =[...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
        //res.status(200).send('No products match your search!');
        return res.status(200).json({success: true, data: []});

    }

    res.status(200).json(sortedProducts);
    //res.send('hello!!!!')
});

app.listen(5000,()=>{
    console.log('Server is listening on port 5000!');
});