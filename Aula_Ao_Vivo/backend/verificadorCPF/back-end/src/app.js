const express = require('express');
const app = express();
const port = 80;

const utilCpf = require('./lib/util_cpf');

app.get("/validar-cpf/:cpf", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    let cpf = req.params.cpf;
    let status =  utilCpf.verificarStatus(cpf);
    let unidadeFederativa = status ? utilCpf.buscarUnidadeFederativa(cpf) : "-"; 
    
    res.json(
        {   cpf: cpf,
            status: status,
            unidadeFederativa: unidadeFederativa
        }
    );

});
 
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})