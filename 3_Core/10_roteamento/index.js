
const http = require('http');
const fs = require('fs');
const url = require('url')




const port = 3000

const server = http.createServer((req,res)=>{
    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1)

//includes é se esta incluido somente algo por exemplo html
    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename,function(err,data){
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
        
            })
        }else{
            fs.readFile('404.html',function(err,data){
                res.writeHead(404, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
        
            })
        }
    }
    
    
})

server.listen(port,()=>{
    console.log(`Servidor Rodando na porta:  ${port}`)
})