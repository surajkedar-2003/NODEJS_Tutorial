const http = require('http');
const data  = require('./public/student.json');

const server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('hello student');
        res.end();
    }
    else if(req.url == '/home'){
        res.writeHead(200, {'ContentType': 'text/json'});
        res.write(JSON.stringify(data));
        res.end();
    }
    else if(req.url == '/angular'){
        let info = data.filter((item)=>{
            return item.project == 'angular';
        })
        res.write(JSON.stringify(info));
        res.end();
    }
    else if(req.url == '/react'){
        let info = data.filter((item)=>{
            return item.project == 'react';
        })
        res.write(JSON.stringify(info));
        res.end();
    }
    else{
        res.writeHead(200, {'ContentType' : 'text/html'});
        res.write('this page is not found');
        res.end();
    }
}).listen(3000);

console.log('server listen on port 3000');