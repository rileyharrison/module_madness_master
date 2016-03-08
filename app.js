var http = require('http');
var balance = require('./accountBalance.js');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(balance.balance() + " " + balance());
    res.end();
}).listen(3000);

console.log('Listening on 3000');
