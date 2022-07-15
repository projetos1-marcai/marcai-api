const { Schema, model } = require('mongoose');
const Horario = require('@models/agenda/Horario').HorarioSchema;

/*
 Verificar conflitos ao adicionar os horarios. Ex: adicionar um horario de 08:00 as 10:00 e outro no mesmo dia de 09:00 as 12:00, pode ocorrer tanto com
 o horário de inicio como o de fim.
 *** Talvez esse caso n precise ser tratado já que agnt n vai mexer com o consumidor, mas tem o caso tb da reserva só pode ser feita a partir do horário do dia. Ex:
    Não é possivel o consumidor reserver um horário de 08:00hrs da segunda feira se já são 14:00hrs da tarde.
*/

const AgendaSchema = new Schema({ 
    servico: {
        type: String,
        required: true,
    },
    domingo: {
        type: [Horario],
        required: false
    },
    segunda: {
        type: [Horario],
        required: false
    },
    terca: {
        type: [Horario],
        required: false
    },
    quarta: {
        type: [Horario],
        required: false
    },
    quinta: {
        type: [Horario],
        required: false
    },
    sexta: {
        type: [Horario],
        required: false
    },
    sabado: {
        type: [Horario],
        required: false
    },

},
    {
        timestamps: true,
    }
);

module.exports = model('Agenda', AgendaSchema);
