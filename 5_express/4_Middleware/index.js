const express = require('express')

const app = express()

const port = 3000 //Variavel de ambiente

const path = require("path")
//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'src');
//------------------------------------------//

//Middlewares uma ação entre as rotas por
//exemplo verificar se o usuario esta logado

const checkAuth = function(req,res,next){
    req.authStatus = true
    if(req.authStatus){
        console.log('Está logado, pode continuar')
        next()

    }else{
        console.log('Não está logado, faça o login para continuar')
        next()
    }
}
//Chamando o Middleware
app.use(checkAuth)

//Criando a Rota

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/Index.html`)
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})