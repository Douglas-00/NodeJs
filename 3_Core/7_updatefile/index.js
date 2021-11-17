
const http = require('http');
const fs = require('fs');
const url = require('url')




const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
    
        })
    }else{
        const nameNewline = name + '\r\n'
        //adiciona o nome e não subsititui igual o writefile
        fs.appendFile("arquivo.txt",nameNewline,function(err,data){
            res.writeHead(302,{
                location:'/',
            })
            return res.end()
        })
    }
    
    
})

server.listen(port,()=>{
    console.log(`Servidor Rodando na porta:  ${port}`)
})
