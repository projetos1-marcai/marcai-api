const Usuario = require('@models/usuario/Usuario');

async function usuarioPorID(req, res) {
    try {
        let usuario = await Usuario.findById({_id: req.params.id_usuario});
        return res.status(200).send({"usuario": usuario});
    } catch (error) {
        return res.status(422).send({"error":"Usuário não encontrado"});
    }
}

module.exports = usuarioPorID;
