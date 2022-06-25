const express = require("express") 

const app = express()

const port = 3000

app.get("/versao", (req, res) => {
    res.send("Calculadora 1.0")
})

app.get("/soma", (req,res) => {
    res.send("Operação de soma.")
})

app.get("/subtracao", (req, res) => {
    res.send("Operação de subtração.")
})

app.get("/divisao", (req, res) => {
    res.send("Operação de divisão.")
})

app.get("/multiplicacao", (req, res) => {
    res.send("Operação de multiplicão.")
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
