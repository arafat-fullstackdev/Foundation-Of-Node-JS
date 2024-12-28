const http = require("http");

const server = http.createServer((req,res) =>{
    //console.log('Server is running!');
    res.end('Hello Node');
});
server.listen(8000, "localhost", ()=>{
    console.log('The server!');
});
