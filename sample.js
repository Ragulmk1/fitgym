var http=require("http");

var server=http.createServer(function(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Welcome to Fitness Website</h1>");
        response.end("<html><body>This is home page,URL was:"+request.url+"</body></html>");
    }
   

    else if(request.url=="/student")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>India is developing country</h1>");
        response.end("<html><body>This is student page,URL was:"+request.url+"</body></html>");
    }
    else if(request.url=="/admin")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>India is developing country</h1>");
        response.end("<html><body>This is admin page,URL was:"+request.url+"</body></html>");
    }
    else{
        response.end("Invalid request");
    }
});

server.listen(2000);
console.log("Server running");
