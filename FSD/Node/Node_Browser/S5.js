var http=require("http")
var url=require("url")
var server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead('200',{'content-type':'text/html'});
        res.write("<h1>Welcome to my page</h1> <ul><li><a href='/'>Home</a></li><li><a href='/about'>about</a></li></ul>" )
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead('200',{"content-type":'text/html'});
        res.end("<h2>About us</h2>")
    }
    else{
        res.writeHead("404",{"content-type":"text/plain"});
        res.end('page not found 123')
    }

})
server.listen(5003);