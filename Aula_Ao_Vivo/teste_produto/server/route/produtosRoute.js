const express = require("express")

const router = express.Router()

router.get("/produtos", async function(req, res){
    let produtosJSON = [
        {
            "id":1,
            "descricao": "Produto 001",
            "preco": 1.99,
            "tipo_produto": "Tipo produto 001"
        }
    ]
    res.json(produtosJSON)
})

module.exports = router;