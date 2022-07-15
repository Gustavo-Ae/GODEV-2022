const express = require("express")

const router = express.Router()

const produtoService = require("../service/produtosService")

router.get("/produtos", async function(req, res){
    let produtosJSON = await produtoService.getProdutos()
    res.json(produtosJSON)
})

router.get('/produtos/:id', async function(req, res){
    const id = req.params.id;
    let produtosJSON = await produtoService.selectProdutoById(id);
    res.json(produtosJSON);
});

router.post('/produtos', async function(req, res){
  res.send("Methodo POST");
});

router.put('/produtos/:id', async function(req, res){
    res.send("Methodo PUT");
});

router.delete('/produtos/:id', async function(req, res){
    res.send("Methodo DELETE");
});


module.exports = router;