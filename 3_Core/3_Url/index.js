const url = require('url')

const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

const parsedUrl = new url.URL(address)
//Endereço do Site
console.log(parsedUrl.host)

//a rota seguida
console.log(parsedUrl.pathname)
//tras os parametros
console.log(parsedUrl.search)
//buscar o parametro
console.log(parsedUrl.searchParams)
//busca o objeto de produtos
console.log(parsedUrl.searchParams.get('produtos'));



