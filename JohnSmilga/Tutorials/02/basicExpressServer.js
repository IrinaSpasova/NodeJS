const express = require('express');
const app = express();
// or just const app = require('express');

app.get('/',(req,res)=>{
    //console.log('user hit the resource');
    res.status(200).send('Home page');
});

app.get('./about', (req, res)=>{
    res.status(200).send('About page');
});
// 404, we use all method in this case. All covers all other methods
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
});

app.listen(5000, ()=>{
    console.log('server is listening on port 5000');
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen