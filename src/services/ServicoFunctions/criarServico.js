const Servico = require('@models/servico/Servico');
const Agenda = require('@models/agenda/Agenda');
const Usuario = require('../../models/usuario/Usuario');
const Endereco = require('@models/servico/Endereco').Endereco;

async function criarServico(req, res) {
    let { 
        titulo,
        descricao,
        cnpj,
        logo_url,
        disponivel,
        presencial,
        valor,
        avaliacoes,
        endereco,
        formas_pagamento,
        categoria
    } = req.body;

    endereco = await Endereco.create({
        numero: endereco.numero,
        rua: endereco.rua,
        bairro: endereco.bairro,
        cidade_id: endereco.cidade_id
    });

    let servico = await Servico.create({ 
        titulo,
        descricao,
        cnpj,
        fornecedor: req.user.nome,
        logo_url,
        disponivel,
        presencial,
        valor,
        avaliacoes,
        endereco,
        formas_pagamento,
        categoria
    });

    let agenda = await Agenda.create({
        servico: servico._id
    });

    servico = await Servico.findByIdAndUpdate(servico._id, {
        agenda: agenda._id
    })

    await Usuario.findByIdAndUpdate({ _id: req.user._id }, {
        fornecedor: true
    });

    return res.status(200).send({"servico": servico});
}

module.exports = criarServico;


