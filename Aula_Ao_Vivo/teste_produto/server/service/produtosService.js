const produtosData = require("../data/produtosData")

exports.getProdutos = function(){
    return produtosData.getProdutos()
}

exports.selectProdutoById = function (id) {
    return produtosData.selectProdutoById(id);
}

exports.insertNovoProduto = function(novoProduto){
    return produtosData.insertNovoProduto(novoProduto)
}

exports.updateProduto = function(id, produto){
    produtosData.updateProduto(id, produto)
}

exports.deleteProduto = function(id){
    produtosData.deleteProduto(id)
}