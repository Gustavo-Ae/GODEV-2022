const express = require("express")

const app = express()

const port = 3000

app.get("/reajuste/:nome/:salario", (request, response) => {
    let nome = request.params.nome
    let salario = parseFloat(request.params.salario)
    let percentualAumento = 0.0
    
    if(salario <= 280.00){
        percentualAumento = 0.2
    }else if(salario <= 700.00){
        percentualAumento = 0.15
    }else if(salario <= 1500.00){
        percentualAumento = 0.1
    }else{
        percentualAumento = 0.05
    }

    let novoSalario = salario + (salario * percentualAumento)

    let mensagem = `O Funcionário ${nome} obteve um aumento de ${percentualAumento*100}% e o seu novo salário será de R$${novoSalario}!`
    response.send(mensagem)
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})