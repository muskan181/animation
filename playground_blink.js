var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('playground_blink2.html',function(error,data){
        if(error){
            res.writeHead(404);
            res.write('File NOT Found!');
        } else{
            res.write(data);
        }
        res.end();

    });
}).listen(8003);
