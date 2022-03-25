const express = require('express')

const app = express()

const port = 5000 //Variavel de ambiente

//Chamando o arquivo de Routes = index.js
const users = require('./routes')
/////////////////////////////////////////


const path = require('path')
const basePath = path.join(__dirname,'./Template');
//ler o body faz o papel do body parser
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//Arquivos estáticos
app.use(express.static('public'))

//o exports de routes deve sempre fica assima das configuração ou da rota principal
app.use('/user',users)
//////////////////////////////////////

////Rota Principal ///////
app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})


//Porta Servidor
app.listen(port,()=>{
    console.log(`App Rodando na porta ${port}`)
})
