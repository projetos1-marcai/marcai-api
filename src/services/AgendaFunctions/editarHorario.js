const Horario = require('@models/agenda/Horario').Horario;
const Reserva = require('@models/agenda/Reserva').Reserva;
const Agenda = require("@models/agenda/Agenda");
const getHoraObj = require("./utils/getHoraObj");
const verificaHorario = require("./utils/verificaHorario");

async function editarHorario(req, res) {

    try {
        const {
            inicio,
            fim
        } = req.body;

        let id_horario = req.params.id;

        let horario = await Horario.findById({_id: id_horario});
        let agenda = await Agenda.findOne({_id: horario.agenda});

        let h1 = getHoraObj(inicio);
        let h2 = getHoraObj(fim);

        let horarios = agenda[horario.dia];
        horarios = horarios.filter(horario => horario._id.toString() != id_horario);
        
        let horario_valido = verificaHorario(horarios, h1, h2);
        if (horario_valido) {
            await Horario.findOneAndUpdate({_id: id_horario}, {
                inicio: h1,
                fim: h2
            });
            horario = await Horario.findById({_id: id_horario});
            horarios.push(horario);
    
            agenda = await Agenda.findOneAndUpdate({_id: horario.agenda}, {
                segunda: (horario.dia == "segunda") ? horarios : agenda.segunda,
                terca:   (horario.dia == "terca")   ? horarios : agenda.terca,
                quarta:  (horario.dia == "quarta")  ? horarios : agenda.quarta,
                quinta:  (horario.dia == "quinta")  ? horarios : agenda.quinta,
                sexta:   (horario.dia == "sexta")   ? horarios : agenda.sexta,
                sabado:  (horario.dia == "sabado")  ? horarios : agenda.sabado,
                domingo: (horario.dia == "domingo") ? horarios : agenda.domingo
            })

            agenda = await Agenda.findOne({_id: horario.agenda});
            return res.status(200).send({"agenda": agenda});
        } else {
            return res.status(404).send({'err': "O horário não pode estar entre algum outro horário já cadastrado."});
        }

    } catch (error) {
        console.log(error);
        return res.status(404).send({"msg": "Problema na alteração do status da reserva."});
    }
    
}

module.exports = editarHorario;
