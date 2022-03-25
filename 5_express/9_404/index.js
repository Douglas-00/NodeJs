const express = require('express')
const router = require('router')
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

router.get('/',(req,res)=>{
    res.sendFile(`${basePath}/Index.html`)
})
app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})



 










app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})