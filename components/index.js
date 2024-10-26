// const path = require('path');

// const myPath = 'D:\Node_JS\Foundation\components\index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));
// const os = require('os');
// console.log(os.cpus());const fs = require('fs');//
// fs.writeFileSync('myfile.txt', 'Hello Programmers');
// fs.appendFileSync('myfile.txt', ' How are you?');

// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString());

// const os = require('os');
// console.log(os.freemem()); 
const fs = require('fs');
 fs.readFile('myfile.txt', (err, data) =>{
    console.log(data.toString());
});
console.log("Hello Coder!");