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

exports.updateProduto = function (id, produto) {
    database.none("UPDATE produto SET descricao = $1, preco = $2, tipo_produto = $3 WHERE id = $4",[produto.descricao, produto.preco, produto.tipo_produto, id])

}

exports.deleteProduto = function (id) {
    return database.oneOrNone("DELETE FROM produto WHERE id = $1 returning *", [id])
}
