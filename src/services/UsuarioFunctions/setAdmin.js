const Usuario = require('@models/usuario/Usuario');

async function setAdmin(req, res) {
    if (!req.user.admin) {
        return res.status(404).send({"message": 'Você precisa ter autorização para tornar outro Usuário Admin.'});
    }
    try {
        let usuario = await Usuario.findOneAndUpdate({_id: req.params.id_usuario}, {
            admin: true
        });
        let message = `Usuário: ${usuario.nome}, de e-mail: ${usuario.email}, atualizado para Admin com sucesso.`;
        return res.status(200).send({"message": message});
    } catch (error) {
        return res.status(402).send({"error":"Usuário não encontrado"});
    }
}

module.exports = setAdmin;
