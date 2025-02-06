const http = require('http');
const server= http.createServer((req,res) =>{
    console.log('Server is running!')
    if(req.url==='/'){
    res.write('<html><head><title>Form</title></head>')
    res.write('<body><form method="post" action="/process"><input name="message"></form></body>');
    res.end();
    }else if(req.url==='/process'){
     res.write('This page is about');
     res.end();
    }else{
        res.write('Page not found');
        res.end();
    }
});
server.listen(3000);
console.log('Listining server port 3000!');