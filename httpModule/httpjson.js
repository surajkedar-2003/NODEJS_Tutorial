const http = require('http');
const data = require('./json1');

const server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('hello student');
        res.end();
    }
    else if(req.url == '/data'){
        res.writeHead(404, {'ContentType' : 'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    }
    else{
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('this page is invalid');
        res.end();
    }
}).listen(3000);
console.log('server listen on port 3000');