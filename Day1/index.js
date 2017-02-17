let http = require("http");

let server = http.createServer(function(req,res){
    res.setHeader("content-type", "text/html");
    res.end("<h1> Fucking boss!!! xD</h1>");
});

server.listen(1234, "localhost",()=>console.log("Server started, listening on port: " + 1234));