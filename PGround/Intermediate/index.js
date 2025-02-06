// Node Stream and Buffer
const fs = require('fs');
const ourStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourStream.on('data', (chunk) =>{
    console.log(chunk);
})
