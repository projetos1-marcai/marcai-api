const Service = require('@models/Service');

async function createService(req, res) {
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

    const service = await Service.create({ 
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

    return res.status(201).send({"service": service});
}

module.exports = createService;


