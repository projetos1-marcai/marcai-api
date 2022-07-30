const { Schema, model } = require('mongoose');

const ReservaSchema = new Schema({ 
    cliente: {
        type: String,
        required: true,
    },
    horario: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
);

module.exports = {
    "Reserva" : model('Reserva', ReservaSchema),
    ReservaSchema
}
