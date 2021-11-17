const fs = require("fs")

fs.stat("novoarquivo.txt",(err,stats)=>{
    if(err){
        console.log(err)
        return
    }
    //status do arquivo
    console.log(stats.isFile())
    //para ver o diretoriuo
    console.log(stats.isDirectory())
    //arquivo simbolico
    console.log(stats.isSymbolicLink())
    //data criação
    console.log(stats.ctime())
    //Tamanho do arquivo
    console.log(stats.size())
    



})