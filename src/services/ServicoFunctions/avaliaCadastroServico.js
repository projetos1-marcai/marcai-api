const Servico = require('@models/servico/Servico');

async function avaliaCadastroServico(req, res) {

    let { 
        aprovacao,
        id_servico
    } = req.params;

    if (!req.user.admin) return res.status(404).send({"message": 'Apenas um administrador do sistema pode avaliar o cadastro de um serviço.'});

    let servico = await Servico.findByIdAndUpdate({_id: id_servico}, {
        aprovacao: (aprovacao !== undefined && aprovacao !== "") ? aprovacao : servico.aprovacao,
    })
    
    let message = `Cadastro do serviço: ${servico.nome} avaliado para: ${aprovacao}.`;
    return res.status(200).send({"message": message});
}

module.exports = avaliaCadastroServico;
