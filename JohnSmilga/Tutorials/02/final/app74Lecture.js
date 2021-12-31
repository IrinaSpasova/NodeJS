const express = require('express');
const app = express();
const logger = require('./logger');

//req => middleware => res

//app.use(logger);

// We can call use with url:
app.use('/api',logger);
//in this case use will work width both things  that are in api- products and items.
// use will work ONLY in any place after /api !
app.get('/',(req,res)=>{
   
    res.send('Home');
});

app.get('/about',(req,res)=>{
    res.send('About');
});

app.get('/api/products',(req,res)=>{
   
    res.send('Products');
});

app.get('/api/items',(req,res)=>{
    res.send('Items');
});

app.listen(5000,logger, ()=>{
    console.log('Server is listening on port 5000!');
});