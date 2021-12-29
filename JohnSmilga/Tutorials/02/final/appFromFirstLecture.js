const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url ==='/'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1> home page</h>');
        res.end();
    }else if(url === '/about'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1> about page</h>');
        res.end();
    }else{
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1>page not found</h>');
        res.end();
    }
  
});

server.listen(5000);

/*
const http = require('http');

const server = http.createServer((req, res) => {
    // test:
    //console.log('user hit the server');
    // console.log(req);  returns BIG object
    // console.log(req.method);  returns request method
    // console.log(req.url);  returns what recourse is wanted by the use ( we test this writhing in the tab bar)
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write('<h1> home page</h>');
    //end() method is mandatory! :
    res.end();
    // nota benne: we can put '<h1> home page</h>' in end brackets!
});

server.listen(5000);
*/