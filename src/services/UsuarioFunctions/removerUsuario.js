const Usuario = require('@models/usuario/Usuario');
const Servico = require('@models/servico/Servico').Servico;

async function removerUsuario(req, res) {

    try {
        let id_usuario = req.params.id_usuario;

        if (!req.user.admin) return res.status(404).send({"msg": 'Apenas um admin do sistema pode remover usuários!'});

        let usuario = await Usuario.findByIdAndDelete({ _id: id_usuario });
        for (const id in usuario.servicos) {
            await Servico.findByIdAndDelete({_id: id});
        }

        return res.status(200).send({"msg": "Usuário removido com sucesso!"});  
    } catch (error) {
        console.log(error);
        return res.status(404).send({"msg": "Erro ao remover o usuário!"});
    }
    
}

module.exports = removerUsuario;
