const path = require('path')

const customPath = "/relatorios/matheus/relatorio.pdf"

//descreve o diretorio onde está o arquivo
console.log(path.dirname(customPath))

//mostra o arquivo no diretorio
console.log(path.basename(customPath))

//mostra extensão do arquivo
console.log(path.extname(customPath))

