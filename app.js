//User sends the data and is redirected to the localhost
const file1 = require('fs');

//Import http 
const http =require('http');
//create a function with request and responce arguments

//create server
const server1= http.createServer((req,res)=>
{
    console.log(req.url,req.method,req.headers);
    const url=req.url;

    const method=req.method;
    if(url==='/')
{
    //Take input from user
    res.write('<html>');
    res.write ('<head><title>Enter your mesage</title></head>');
    res.write('<body>  <form method="/message" method="POST"><input type="text" name="message"><button type="submit" name="button" >submit </form></body>');
    res.write('</html>');
    return res.end();
}
    if(url==='/message' && method==='POST')
    { 
        file1.writeSync('user.txt','I love NodeJs backend Programming');
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();

    }

    //process.exit();
    //Create responce
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write ('<head><title>Welcome to NodeJs page</title></head>');
    res.write('<body> <h1>Hello there welcome to NodeJs server Responce</h1></body>');
    res.write('</html>');
    res.end();

});
//set the port the server to listen at
server1.listen(1000);


