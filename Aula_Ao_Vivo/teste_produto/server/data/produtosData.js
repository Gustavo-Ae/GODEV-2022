const database = require("../infra/conection")

exports.getProdutos = () => {
    return database.query("SELECT * FROM produto")
}

exports.selectProdutoById = function (id) {
    return database.query("SELECT * FROM produto WHERE id = $1", [id]);
}

exports.insert = function (produto) {
   
}

exports.update = function (id) {
   
}
