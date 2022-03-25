const express = require('express')

const router = express.Router()

const path = require("path")
//Buscando o Diretorio base e os arquivos
const basePath = path.join(__dirname,'../src');
//------------------------------------------/


router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/form.html`)
})

router.post('/save',(req,res)=>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e tem ${age} anos`)
    res.sendFile(`${basePath}/form.html`)
})  

router.get('/:id',(req,res)=>{
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário
    console.log(`Estamos buscando pelo usuário: ${id}`)


    res.sendFile(`${basePath}/Index.html`)
})

module.exports = router;