/* 
//basic server:
const http = require('http');

const server = http.createServer((req, res)=>{
  res.write('Welcome our home page!'); //this creates the loop
  res.end();
});

server.listen(5000);
*/


const http = require('http');

const server = http.createServer((req, res) => {

  /*
  // test req( after node app.js have to refresh browser for the result in this console!)
  // console.log(req);


  if (req.url === '/') {
    res.end('Welcome our home page!');
  }

  if (req.url === '/about') {
    res.end('Here is our short history:');
  }

  // if user try to reach resource that do not exist- 404:

  res.end(`
  <h1>Oops</h1>
  <p> We can't seem to find the page that you are looking for!</p>
  <a href="/> back home</a>  `)
  */

  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }

});

server.listen(5000);




// Important:
/*
const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
*/