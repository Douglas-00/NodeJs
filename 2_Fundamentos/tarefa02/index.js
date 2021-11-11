const inquirer = require('inquirer')

const chalk = require('chalk')

inquirer.prompt([{name:'p1', message:'Qual o seu nome ?'},
{name:'p2',message:'Qual a sua Idade ?'},]).then((answers)=>{
    console.log(chalk.bgYellow.black(" Seu nome é ",answers.p1))
    console.log(chalk.bgYellow.black("E sua idade é ",(answers.p2)," Anos"))
}).catch((err)=>{
    console.log(err)
})