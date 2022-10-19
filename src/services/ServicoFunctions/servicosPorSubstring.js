const Servico = require('@models/servico/Servico');

async function servicosPorSubstring(req, res) {
    try {
        const servicos = await Servico.find({titulo:  { "$regex": req.params.substring, "$options": "i" }});
        return res.status(200).send({"servicos": servicos});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicosPorSubstring;
