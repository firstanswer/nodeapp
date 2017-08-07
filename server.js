/*var hp = require('http')

hp.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello world');
}).listen(1337, '127.0.0.1');
console.log('server started')
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('index.html',(function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(data);
    }));
}).listen(1337, '127.0.0.1');
console.log('server started')
