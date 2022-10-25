const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require("@models/agenda/Agenda");
const Reserva = require('@models/agenda/Reserva').Reserva;
const getDateObj = require('./utils/getDateObj')

async function reservarHorario(req, res) {

    try {
        let id_horario = req.params.id_horario;
        
        const {
            inicio,
            fim
        } = req.body; 

        let horario = await Horario.findById({_id: id_horario});
        let agenda = await Agenda.findById({_id: horario.agenda});

        if (req.user.servicos.includes(agenda.servico)) return res.status(404).send({"message": 'O fornecedor não pode reservar um horário no próprio serviço.'});

        let id_usuario = req.user._id.toString();
        let h1 = getDateObj(inicio);
        let h2 = getDateObj(fim);

        let reserva = await Reserva.create({
            cliente: id_usuario,
            horario: id_horario,
            status: 1, // 1 = Pendente
            inicio: h1,
            fim: h2
        })
        
        let reservas = horario.reservas;
        reservas.push(reserva)

        await Horario.findByIdAndUpdate(
            {_id: id_horario},
            {reservas: reservas}
        )
        horario = await Horario.findById({_id: id_horario});
        
        // Recuperando horários de um dia específico da Agenda
        let horarios = agenda[horario.dia];
        
        // Identificando o horário específico, para ter a Reserva atualizada
        horarios = horarios.filter((horario) => horario._id != id_horario);
        horarios.push(horario) 

        // Atualizando horários de um dia específico da Agenda
        let id_agenda = agenda._id.toString()
        switch (horario.dia) {
            case "segunda":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "segunda": horarios
                })
                break;
            case "terca":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "terca": horarios
                })
                break;
            case "quarta":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "quarta": horarios
                })
                break;
            case "quinta":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "quinta": horarios
                })
                break;
            case "sexta":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "sexta": horarios
                })
                break;
            case "sabado":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "sabado": horarios
                })
                break;
            case "domingo":
                await Agenda.findByIdAndUpdate({_id: id_agenda},{
                    "domingo": horarios
                })
                break;
        }

        return res.status(200).send({"horario": horario});
    } catch (error) {
        return res.status(404).send({"msg": "Problema na criação da reserva."});
    }
    
}

module.exports = reservarHorario;
