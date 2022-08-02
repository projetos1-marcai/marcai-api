const Usuario = require('@models/usuario/Usuario');

async function listarUsuarios(req, res) {

    const usuarios = await Usuario.find();

    return res.status(200).send({"usuarios": usuarios});
}

module.exports = listarUsuarios;
