const express = require("express")

const server = express()

const port = 3000

server.use(express.json()) //Aqui estou indicando o que esta sendo enviado, que nesse caso é o JSON.

server.use("/", require("./route/produtosRoute"))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
