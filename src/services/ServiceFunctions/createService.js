const Service = require('@models/Service');

async function createService(req, res) {
    const { titulo,descricao,prestador,email,telefone } = req.body;

    const service = await Service.create({
        titulo,descricao,prestador,email,telefone
    });

    return res.status(201).send({"service": service});
}

module.exports = createService;


