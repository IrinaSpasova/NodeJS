//this is app.js BEFORE putting index.html in public!


const express = require('express'); //have to install express
const path = require('path') //do not have to install, this is NodeJs module

const app = express();

//set up static and middleware
app.use(express.static('./public')); //method "use" is for middleware


app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
});

app.all('*',(req,res)=>{
res.status(404).resolve('resource not found');
});

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
});
