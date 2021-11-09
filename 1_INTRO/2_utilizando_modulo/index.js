const fs = require('fs')//file system

fs.readFile('arquivo.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
});

const a = 10;
const b = 5;

console.log(a * b);

