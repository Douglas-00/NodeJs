//Modulos Externos
const chalk = require("chalk")
const inquirer = require("inquirer")

//Modulos internos
const fs = require('fs')

console.log('Iniciarmos o projeto ');



operation();
function operation(){
    inquirer.prompt([
        {
            type:'list',
            name:'action',
            message:'O que você deseja fazer?',
            choices:['Criar Conta','Consultar Saldo','Depositar','Sacar','Sair'],

        },
    ])
    .then((answer)=>{
        const action = answer['action']
        if(action === 'Criar Conta'){
            createAccount();
        }else if(action === 'Consultar Saldo'){
            getAccountBalance();
        }else if(action === 'Depositar'){
            deposito();
        }else if(action === 'Sacar'){
            withdraw();

        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit()
        }
    })
    .catch((err) => console.log(err));
}

//create a conta 

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

//Função criar o metodo conta
function buildAccount(){
    inquirer.prompt([{
        name:'accountName',
        message:'Digite um nome para sua conta:'
    }
        
    ]).then(answer =>{
        const accountName = answer['accountName']
        console.info(accountName);

        if(!fs.existsSync('accounts')){
           fs.mkdirSync('accounts') 
        }
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))

            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${accountName}.json`,'{"balance":0}',
        function (err){
            console.log(err)
        },)
        console.log(chalk.green('Parabéns, a sua conta foi criada!'));
        operation();
    }).catch((err)=>console.log(err));
    
}
function deposito(){
    inquirer.prompt([{name:'accountName',message:'Qual a sua conta?'},])
    .then((answer)=>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return deposito();
        }

        inquirer.prompt([
                {
                    name:'amount',
                    message:'Quanto você deseja depositar',
                },
        ]).then((answer)=>{
            const amount = answer['amount']

            //add a amount
            addAmount(accountName,amount)
            operation();
        }).catch(err=> console.log(err));





    }).catch((err) => console.log(err));
    
}

function checkAccount(accountName){
    
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true

}


function addAmount(accountName,amount){
    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, Tente novamente mais tarde! '),
        )
        return deposito();
    }

    account.balance = parseFloat(amount)+parseFloat(account.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(account),
    function(err){
        console.log(err)
    },
    )
    console.log(chalk.green(`Foi deposito o valor de R$${amount} na sua conta!`))
   

    
}
function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding:'utf8',
        flag:'r'
    })
    return JSON.parse(accountJson)
}

//show accounbalace

function getAccountBalance(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance();
        }
        const account = getAccount(accountName)

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R${account.balance}`,),
        )
        operation()




    }).catch(err => console.log(err))
}

//get an amount
function withdraw(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['accountName']
        if(!checkAccount(accountName)){
            return withdraw();
        }

        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja sacar?'          
          }
        ]).then((answer)=>{
            const amount = answer['account']
            operation();


        }).catch(err => console.log(err));

    }).catch(err => console.log(err))
}