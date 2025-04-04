var http=require("http")
var url=require("url")
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    var q=url.parse(req.url,true).query;
    res.write(q.year+" "+q.month);
    res.end();
}).listen(5001);
// http://localhost:5001/test/?year=2025&month=April