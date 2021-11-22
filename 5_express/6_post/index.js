const express = require('express')

const app = express()

const port = 3000 //Variavel de ambiente

const path = require("path")
//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'src');
//------------------------------------------/
//ler o body
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())



app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/form.html`)
})

app.post('/users/save',(req,res)=>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e tem ${age} anos`)
    res.sendFile(`${basePath}/form.html`)
})  

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