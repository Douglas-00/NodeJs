const express = require('express')

const router = express.Router()

const path = require('path')
//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'../template');
//------------------------------------------/

router.get('/Cadastro',(req,res)=>{
    res.sendFile(`${basePath}/form.html`)
})
router.get('/login',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

 

//Exportando o modulo de Rotas para o Serve.js
module.exports = router;