const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require("@models/agenda/Agenda");
const Servico = require("@models/servico/Servico");
const getHoraObj = require("./utils/getHoraObj");
const verificaHorario = require("./utils/verificaHorario");

async function criarHorario(req, res) {
    let servico = await Servico.findById(req.body.id_servico);
    let id_servico = servico._id.toString();
    let agenda = await Agenda.findOne({servico: id_servico});

    const {
        dia,
        inicio,
        fim
    } = req.body;

    let h1 = getHoraObj(inicio)
    let h2 = getHoraObj(fim)

    let horario_valido = verificaHorario(agenda[dia], h1, h2);
    if (!horario_valido) {
        return res.status(404).send({'err': "O horário não pode estar entre algum outro horário já cadastrado."});
    }

    let id_agenda = agenda._id.toString();
    const horario = await Horario.create({ 
        agenda: id_agenda,
        inicio: h1,
        fim: h2
    });

    try {
        agenda[dia].push(horario);
        agenda.save()
    }
    catch (e) {
        return res.status(404).send({'err': e})
    }

    return res.status(201).send({"agenda": agenda});
}

module.exports = criarHorario;


