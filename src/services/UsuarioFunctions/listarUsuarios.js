const Usuario = require('@models/usuario/Usuario');

async function listarUsuarios(req, res) {

    if (!req.user.admin) {
        return res.status(404).send({"message": 'Você precisa ter autorização para visualizar a lista de usuários.'});
    }

    const usuarios = await Usuario.find();

    return res.status(200).send({"usuarios": usuarios});
}

module.exports = listarUsuarios;
