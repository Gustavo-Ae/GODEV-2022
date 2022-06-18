const path = require("path")  // Esse modulo já vem no node , então não precisa instalar.

// Basename

console.log(path.basename(__filename))  // Nome do arquivo atual

// Nome do Diretório atual desse arquivo 

console.log(path.dirname(__filename))

// Pegando a extensão do arquivo :

console.log(path.extname(__filename))

// Criar um objeto Path :

console.log(path.parse(__filename))

// Juntar caminhos de arquivos : 

console.log("Juntar caminhos de arquivos: "+path.join(__dirname, "test"))
