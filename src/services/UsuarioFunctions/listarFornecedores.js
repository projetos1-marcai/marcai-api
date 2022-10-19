const Usuario = require('@models/usuario/Usuario');

async function listarFornecedores(req, res) {

    const fornecedores = await Usuario.find({fornecedor:true});

    return res.status(200).send({"fornecedores": fornecedores});
}

module.exports = listarFornecedores;
