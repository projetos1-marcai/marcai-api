const MetodosPagamento = require('@models/servico/MeioDePagamentoENUM');

async function listarMeiosDePagamentos(req, res) {

    // const metodosPagamento = await MetodosPagamento.find();

    return res.status(200).send({"metodos_pagamento": MetodosPagamento});
}

module.exports = listarMeiosDePagamentos;
