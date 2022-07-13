const express = require("express")

const server = express()

const port = 3000

server.use("/", require("../route/produtosRoute"))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
