const http = require('http');
const {readFileSync} = require('fs');

//get all files:
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');
const contact = readFileSync('./navbar-app/contact.html');
const projects = readFileSync('./navbar-app/projects.html');
const about = readFileSync('./navbar-app/about.html');

const server = http.createServer((req, res) => {

    const url = req.url;
  // test:  console.log(url);

    if(url ==='/index.html'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(homePage);
        res.end();
    }else if(url === '/styles.css'){
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        res.write(homeStyles);
        res.end();
    }else if(url === '/logo.svg'){
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        });
        res.write(homeImage);
        res.end();
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {
            'content-type': 'text/javascript'
        });
        res.write(homeLogic);
        res.end();
    }else if(url === '/about.html'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(about);
        res.end();
    }else if(url === '/projects.html'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(projects);
        res.end();
    }else if(url === '/contact.html'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(contact);
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




