const Servico = require('@models/servico/Servico');

async function servicosPorAprovacao(req, res) {
    try {
        const servicos = await Servico.find({aprovacao: req.params.id_aprovacao});
        return res.status(200).send({"servicos": servicos});
    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicosPorAprovacao;
