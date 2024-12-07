//*1.Import required modules*//
// import http from "http";
// console.log(http);
const http = require("http");
console.log(http);
let server = http.createServer();
// console.log(server);

//? 2. Define the handler //
const requestHandler = (req, res) => {
  //send message
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Node");
};

//! 3. Create the Server //
const serverNode = http.createServer(requestHandler);

//* Start the Server *//
const PORT = 8080;
serverNode.listen(PORT, () => {
  console.log(`Server is running on http://Localhost:${PORT}`);
});
