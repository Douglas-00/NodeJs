const fs = require("fs")

console.log("Inicio")

fs.writeFile('arquivo.txt','oi',function (err){
    setTimeout(function (){
        console.log('Arquivo Criado')
    },3000)
})

console.log('Fim')