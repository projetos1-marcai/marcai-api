const { Schema, model } = require('mongoose');

const Reserva = require('@models/agenda/Reserva').ReservaSchema;

const HorarioSchema = new Schema({ 
    agenda: {
        type: String,
        required: true,
    },
    inicio: {
        type: Date,
        required: true
    },
    fim: {
        type: Date,
        required: true
    },
    dia: {
        type: String,
        required: true
    },
    disponivel: {
        type: Boolean,
        required: false,
        default: true
    },
    reservas: {
        type: [Reserva],
        required: false,
        default: []
    },
},
    {
        timestamps: true,
    }
);

module.exports = {
    "Horario" : model('Horario', HorarioSchema),
    HorarioSchema
}
