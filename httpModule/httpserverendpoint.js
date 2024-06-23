const { Console } = require('console');
const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('hello user');
        res.end();
    }
    else if(req.url == '/home'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('this is home page');
        res.end();
    } 
    else if(req.url == '/about'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('this is about page');
        res.end();
    }
    else if(req.url== '/gallery'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('this is gallery page');
        res.end();
    }
    else{
        res.write('this page is invalid');
        res.end();
    }
})

server.listen(3000);
console.log('server listen on 3000');