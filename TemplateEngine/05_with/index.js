const express = require('express')
const exphbs = require("express-handlebars")

//Executando express
const app = express()

//Executando handlebars
app.engine('handlebars', exphbs.engine())
//setup instalar handlebars
app.set('view engine','handlebars')

app.get('/dash',(req, res)=>{
    const itens = ["item a","item b","item c"]
    res.render('dash',{itens})
})

//post 
app.get('/post',(req, res)=>{
    const post = {
       title:'Aprender Node.js',
       category:'javascript',
       body:'Este artigo vai te ajudar a aprender Node',
       comments:4,
    }

    res.render('blogpost',{post})
})

app.get('/', (req, res)=>{
    //mandando para o front as variaveis
    const user = {name:'dodo',surname:'alves',age:14}

    const palavra = 'teste'

    const auth = false

    const aproved = false
    res.render('home',{data:user,palavra,auth,aproved})
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})