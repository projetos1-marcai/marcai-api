const Horario = require('@models/agenda/Horario').Horario;
const Reserva = require('@models/agenda/Reserva').Reserva;
const Agenda = require("@models/agenda/Agenda");

async function setarStatusReserva(req, res) {

    try {
        let id_reserva = req.params.id_reserva;
        let id_status = req.params.id_status;

        let reserva = await Reserva.findById({_id: id_reserva});
        let id_horario = reserva.horario;
        
        let horario = await Horario.findById({_id: id_horario});
        let agenda = await Agenda.findById({_id: horario.agenda});
        let id_agenda = agenda._id;


        if (!req.user.servicos.includes(agenda.servico)) return res.status(404).send({"message": 'Apenas o fornecedor do serviço pode aceitar uma reserva.'});

        await Reserva.findByIdAndUpdate({_id: id_reserva}, {
            status: id_status
        })
        reserva = await Reserva.findById({_id: id_reserva});


        let reservas = horario.reservas.filter(reserva => reserva._id.toString() != id_reserva);
        reservas.push(reserva);
        if (id_status == 3){
            await Horario.findByIdAndUpdate({_id: id_horario}, {
                reservas: reservas,
                disponivel: false
            })
        } else {
            await Horario.findByIdAndUpdate({_id: id_horario}, {
                reservas: reservas
            })
        }
        horario = await Horario.findById({_id: id_horario});


        let horarios = agenda[horario.dia];
        horarios = horarios.filter((horario) => horario._id != id_horario);
        horarios.push(horario)

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
        console.log(error)
        return res.status(404).send({"msg": "Problema na alteração do status da reserva."});
    }
}

module.exports = setarStatusReserva;
