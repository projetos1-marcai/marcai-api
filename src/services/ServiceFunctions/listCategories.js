const Categoria = require('@models/ServiceCategoryENUM');

async function listCategories(req, res) {

    // const categorias = await Categoria.find();

    return res.status(200).send({"categorias": Categoria});
}

module.exports = listCategories;
