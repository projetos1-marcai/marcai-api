const Servico = require('@models/servico/Servico');

async function listarServicos(req, res) {

    const servicos = await Servico.find();

    return res.status(200).send({"servicos": servicos});
}

module.exports = listarServicos;
