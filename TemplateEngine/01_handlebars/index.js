const express = require('express')
const exphbs = require("express-handlebars")

//Executando express
const app = express()

//Executando handlebars
app.engine('handlebars', exphbs.engine())
//setup instalar handlebars
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})