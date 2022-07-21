const database = require("../infra/conection")

exports.getProdutos = () => {
    return database.query("SELECT * FROM produto")
}

exports.selectProdutoById = function (id) {
    return database.query("SELECT * FROM produto WHERE id = $1", [id]);
}

exports.insertNovoProduto = function (produto) {
    return database.one("INSERT INTO produto VALUES (DEFAULT, $1, $2, $3) returning *",[produto.descricao, produto.preco, produto.tipo_produto])
}

exports.update = function (id) {
   
}
