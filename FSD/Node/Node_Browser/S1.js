var http=require("http")
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plan'}),
    res.write('Welcome student');
    res.write('HIIIII')
    res.end();
})
server.listen(3002,()=>{
    console.log("Server id running on http://localhost:3001")
})