const express = require('express')

const app = express()

const port = 3000 //Variavel de ambiente

const users = require('./users')


const path = require('path')
const basePath = path.join(__dirname,'../src');
//ler o body
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//Arquivos estáticos
app.use(express.static('public'))
app.use('/users',users)





 










app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})