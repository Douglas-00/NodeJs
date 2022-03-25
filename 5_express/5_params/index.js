const express = require('express')

const app = express()

const port = 3000 //Variavel de ambiente

const path = require("path")
//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'src');
//------------------------------------------/


app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    //leitura da tabela users, resgatar um usuário
    console.log(`Estamos buscando pelo usuário: ${id}`)


    res.sendFile(`${basePath}/users.html`)
})
//Criando a Rota

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/Index.html`)
})











app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})