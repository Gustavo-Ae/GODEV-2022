const express = require("express") 

const app = express()

const port = 8080

app.get("/", (req, res) => {
    res.send("GET Method")  
})

app.post("/", (req, res) => {
    res.send("POST Method")
})

app.put("/", (req, res) => {
    res.send("PUT Method")
})

app.delete("/", (req, res) => {
    res.send("DELETE Method")
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})

