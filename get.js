http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('Request for'+path+'received.');
    var query=url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)["name"];
    var email=querystring.parse(query)["email"];
    var PhoneNumber =querystring.parse(query)["num"];
    var Password =querystring.parse(query)["password"];
    var Password1 =querystring.parse(query)["password2"];
    response.write('Hello '+name+' ,your email id '+email+' ,are register successfully');
    response.end();

}
http.createServer(onRequest).listen(8000);
console.log('Server has started');