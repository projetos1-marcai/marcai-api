const Agenda = require('@models/agenda/Agenda');

async function agendaPorID(req, res) {
    try {
        let agenda = await Agenda.findById({_id: req.params.id_agenda});
        let id_agenda = agenda._id;
        return res.status(200).send({"agenda": agenda});
    } catch (error) {
        return res.status(422).send({"error":"Agenda não encontrada"});
    }
}

module.exports = agendaPorID;
