const produtosData = require("../data/produtosData")

exports.getProdutos = function(){
    return produtosData.getProdutos()
}

exports.selectProdutoById = async function (id) {
    const produto = await produtosData.selectProdutoById(id);
    if (!produto){
        throw new Error('Produto não encontrado!');
    }
    return produto;
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