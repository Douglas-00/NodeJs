const express = require('express')

const app = express()

const port = 3000 //Variavel de ambiente

const users = require('./users')


const path = require("path")
//ler o body
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'src');
//------------------------------------------/

app.use('./users',users)

//Criando a Rota

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/Index.html`)
})

 










app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})