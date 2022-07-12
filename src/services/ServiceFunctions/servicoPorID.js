const Servico = require('@models/servico/Servico');

async function servicoPorID(req, res) {
    try {
        const servico = await Servico.find({_id: req.params.id});
        return res.status(200).send({"servico": servico});

    } catch (error) {
        return res.status(422).send(error.message);
    }

}

module.exports = servicoPorID;
