const url = require('url')

const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

const parsedUrl = new url.URL(address)