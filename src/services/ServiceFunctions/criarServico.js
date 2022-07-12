const Servico = require('@models/servico/Servico');

async function criarServico(req, res) {
    const { 
        titulo,
        descricao,
        cnpj,
        fornecedor,
        logo_url,
        disponivel,
        presencial,
        valor,
        avaliacoes,
        endereco,
        formas_pagamento,
        categoria,
        agenda
    } = req.body;

    const servico = await Servico.create({ 
        titulo,
        descricao,
        cnpj,
        fornecedor,
        logo_url,
        disponivel,
        presencial,
        valor,
        avaliacoes,
        endereco,
        formas_pagamento,
        categoria,
        agenda
    });

    return res.status(201).send({"servico": servico});
}

module.exports = criarServico;


