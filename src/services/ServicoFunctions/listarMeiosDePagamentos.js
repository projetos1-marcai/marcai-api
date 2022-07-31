const MetodosPagamento = require('@models/servico/MeioDePagamentoENUM');

async function listarMeiosDePagamentos(req, res) {

    return res.status(200).send({"metodos_pagamento": MetodosPagamento});
}

module.exports = listarMeiosDePagamentos;
