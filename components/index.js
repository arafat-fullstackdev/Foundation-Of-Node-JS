const path = require('path');

const myPath = 'D:\Node_JS\Foundation\components\index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
console.log(path.parse(myPath));