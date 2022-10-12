const Servico = require('@models/servico/Servico');

async function atualizarServico(req, res) {

    let { 
        titulo,
        descricao,
        cnpj,
        logo_url,
        disponivel,
        presencial,
        valor,
        endereco,
        formas_pagamento,
        categoria,
    } = req.body;

    if (!req.user.servicos.includes(req.params.id_servico)) return res.status(404).send({"message": 'Apenas o fornecedor do serviço pode atualizar seus atributos.'});

    let servico = await Servico.findById({_id: req.params.id_servico})
    servico = await Servico.findByIdAndUpdate({_id: req.params.id_servico}, {
        titulo: (titulo !== undefined && titulo !== "") ? titulo : servico.titulo,
        descricao: (descricao !== undefined && descricao !== "") ? descricao : servico.descricao,
        cnpj: (cnpj !== undefined && cnpj !== "") ? cnpj : servico.cnpj,
        logo_url: (logo_url !== undefined && logo_url !== "") ? logo_url : servico.logo_url,
        disponivel: (disponivel !== undefined && disponivel !== "") ? disponivel : servico.disponivel,
        presencial: (presencial !== undefined && presencial !== "") ? presencial : servico.presencial,
        valor: (valor !== undefined && valor !== "") ? valor : servico.valor,
        endereco: (endereco !== undefined && endereco !== "") ? endereco : servico.endereco,
        formas_pagamento: (formas_pagamento !== undefined && formas_pagamento !== "") ? formas_pagamento : servico.formas_pagamento,
        categoria: (categoria !== undefined && categoria !== "") ? categoria : servico.categoria,
    })

    return res.status(200).send({"servico": servico});
}

module.exports = atualizarServico;
