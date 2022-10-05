const Servico = require('@models/servico/Servico');

async function servicosPorCidade(req, res) {
    try {
        const servicos = await Servico.find({"endereco.cidade_id": req.params.id_cidade});
        return res.status(200).send({"servicos": servicos});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicosPorCidade;
