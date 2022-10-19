const Servico = require('@models/servico/Servico');

async function servicosPorCategoria(req, res) {
    try {
        const servicos = await Servico.find({categoria: req.params.id_categoria});
        return res.status(200).send({"servicos": servicos});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicosPorCategoria;
