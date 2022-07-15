const produtosData = require("../data/produtosData")

exports.getProdutos = function(){
    return produtosData.getProdutos()
}

exports.selectProdutoById = function (id) {
    return produtosData.selectProdutoById(id);
}