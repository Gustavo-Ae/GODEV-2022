const express = require("express")

const app = express()

const port = 3000

app.get("/versao", (req, res) => {
    res.send("Calculadora 1.0")
})

app.get("/soma/:n1/:n2", (req, res) => {
    let numero1 = parseFloat(req.params.n1)
    let numero2 = parseFloat(req.params.n2)
    let resultado = numero1 + numero2
    res.send(`${resultado}`)
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})


