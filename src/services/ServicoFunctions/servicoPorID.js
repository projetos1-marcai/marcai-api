const Servico = require('@models/servico/Servico');
const Agenda = require('@models/agenda/Agenda');

async function servicoPorID(req, res) {
    try {
        let servico = await Servico.findById({_id: req.params.id});
        let id_agenda = servico.agenda;
        const agenda = await Agenda.findById(id_agenda);
        return res.status(200).send({"servico": servico, "agenda": agenda});
    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicoPorID;
