const http=require('http');

function handleRequest(request, response){
    response.statusCode = 200;
    response.end('<h1>Hello World!</h1>');
}
const myServer =http.createServer(handleRequest);

myServer.listen(3000);
