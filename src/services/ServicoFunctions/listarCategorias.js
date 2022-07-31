const Categoria = require('@models/servico/CategoriaENUM');

async function listarCategorias(req, res) {

    return res.status(200).send({"categorias": Categoria});
}

module.exports = listarCategorias;
