const http = require('http');
const server = http.createServer(function (requst, response) {
    response.writeHead(200, {'ContentType': 'text/html'});
    response.write('hello my name is suraj');
    response.end();
    
})

server.listen(3000);
console.log('server listen on port on 3000');