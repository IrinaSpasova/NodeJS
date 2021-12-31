const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

//req => middleware => res


// 01. Use vs route
//02. options - our middleware, express middleware or third party.

// our middleware ex.:
//app.use([logger, authorize]);

//build in middleware from express ex.:
//app.use(express.static('./public'));

//third party middleware ex. (npm i morgan):
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
   
    res.send('Home');
});

app.get('/about',(req,res)=>{
    res.send('About');
});

app.get('/api/products',(req,res)=>{
   
    res.send('Products');
});


//before Morgan:
// app.get('/api/items',[logger, authorize],(req,res)=>{
//     console.log(req.user);
//     //test : http://localhost:5000/api/items/?user=john
//     res.send('Items');
// });


//after morgan:
app.get('/api/items',(req,res)=>{
    console.log(req.user);
    //test : http://localhost:5000/api/items/?user=john
    res.send('Items');
});

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000!');
});