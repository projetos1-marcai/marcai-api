const MetodosPagamento = require('@models/ServicePaymentMethodsENUM');

async function listPaymentMethods(req, res) {

    // const metodosPagamento = await MetodosPagamento.find();

    return res.status(200).send({"metodos_pagamento": MetodosPagamento});
}

module.exports = listPaymentMethods;
